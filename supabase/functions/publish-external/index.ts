// Hotel NEXUS — publish-external Edge Function
// The one real enforcement point for every external-output adapter (Slack, HeyGen,
// GenSpark, future Discord/email). ip-layer.js's canPublishExternally() is a client-side
// UX short-circuit only — it cannot be trusted as a security boundary in a static
// browser app, since anyone with devtools can call fetch() directly. This function is
// the actual boundary: it holds provider secrets server-side and independently verifies
// approval_request_id against the database rather than trusting the client's claim.
//
// Deploy: supabase functions deploy publish-external
// Secrets (never in client code): supabase secrets set SLACK_WEBHOOK_<CHANNEL>=... HEYGEN_API_KEY=...

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

// Service-role client: this function needs to read approval_request and agent_profile
// regardless of RLS (it IS the trusted enforcement layer), so it uses the service key,
// which — unlike the anon key — must never be shipped to the browser.
const db = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

type PublishRequest = {
  requested_action_type: "slack_post" | "video_render" | "canvas_publish";
  agent_id: string;
  content_ref: string;
  content_hash: string;
  ip_disclosure_level: "public" | "licensed-partner" | "private";
  approval_request_id?: string;
  destination: { channel?: string; provider?: string };
  payload: Record<string, unknown>;
};

async function logAttempt(req: PublishRequest, allowed: boolean, reason: string) {
  await db.from("audit_log").insert({
    agent_id: req.agent_id,
    action_type: allowed ? `${req.requested_action_type}:sent` : `${req.requested_action_type}:blocked`,
    target_table: "external_publish",
    target_id: req.content_ref,
    proprietary_content_touched: req.ip_disclosure_level !== "public",
  });
  // A blocked attempt is itself a signal worth having, not just a rejected request —
  // audit every outcome, not only successes.
}

async function verifyApproval(req: PublishRequest): Promise<{ ok: boolean; reason: string }> {
  if (req.ip_disclosure_level === "public") return { ok: true, reason: "public content, no approval required" };

  if (!req.approval_request_id) {
    return { ok: false, reason: "non-public content requires approval_request_id" };
  }

  const { data, error } = await db
    .from("approval_request")
    .select("decision_status, content_ref, content_hash, expires_at, requested_by_agent")
    .eq("approval_request_id", req.approval_request_id)
    .single();

  if (error || !data) return { ok: false, reason: "approval_request_id does not exist" };
  if (data.decision_status !== "approved") return { ok: false, reason: `approval status is '${data.decision_status}', not 'approved'` };
  if (data.expires_at && new Date(data.expires_at) < new Date()) return { ok: false, reason: "approval has expired" };
  if (data.requested_by_agent !== req.agent_id) return { ok: false, reason: "approval was requested by a different agent" };
  if (data.content_ref !== req.content_ref) return { ok: false, reason: "approval does not cover this content_ref" };
  if (data.content_hash && data.content_hash !== req.content_hash) {
    return { ok: false, reason: "content_hash mismatch — content changed since approval was granted" };
  }

  return { ok: true, reason: "approved" };
}

// Estate index §9 (Examiner role): "protect Delia from being flattered into false
// coherence." An Examiner contradiction_flag was previously advisory-only — recorded
// in memory_item, but nothing checked it. That's a procedure, not enforcement. This
// makes it a real veto: unresolved flags on this content_ref block the send outright,
// regardless of approval status. An approval can't override an unresolved contradiction
// — the flag has to be resolved (a new memory_item superseding it) first.
async function verifyNoUnresolvedVeto(req: PublishRequest): Promise<{ ok: boolean; reason: string }> {
  const { data, error } = await db
    .from("memory_item")
    .select("memory_id, summary, superseded_by")
    .eq("memory_type", "contradiction_flag")
    .is("superseded_by", null)
    .contains("topics", [req.content_ref]);

  if (error) return { ok: false, reason: `veto check failed: ${error.message}` }; // fail closed, not open

  if (data && data.length > 0) {
    return {
      ok: false,
      reason: `Examiner veto unresolved on this content: "${data[0].summary}" (memory_id ${data[0].memory_id}) — resolve before this can send`
    };
  }
  return { ok: true, reason: "no unresolved veto" };
}

async function dispatch(req: PublishRequest): Promise<Response> {
  if (req.requested_action_type === "slack_post") {
    const channel = req.destination.channel ?? "unknown";
    const webhookUrl = Deno.env.get(`SLACK_WEBHOOK_${channel.replace("#", "").toUpperCase()}`);
    if (!webhookUrl) {
      return new Response(JSON.stringify({ sent: false, reason: `no webhook configured for ${channel}` }), { status: 500 });
    }
    const slackRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ text: req.payload.content ?? "" }),
    });
    return new Response(JSON.stringify({ sent: slackRes.ok }), { status: slackRes.ok ? 200 : 502 });
  }

  // video_render (HeyGen) and canvas_publish (GenSpark) are specced but not wired to a
  // live provider call yet — HeyGen adapter code isn't written, and GenSpark has no
  // confirmed programmatic API (SCHEMA.md build order note). Stub, not silently allowed.
  return new Response(JSON.stringify({ sent: false, reason: `${req.requested_action_type} dispatch not implemented yet` }), { status: 501 });
}

Deno.serve(async (request: Request) => {
  if (request.method !== "POST") {
    return new Response("method not allowed", { status: 405 });
  }

  let body: PublishRequest;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ sent: false, reason: "invalid JSON body" }), { status: 400 });
  }

  if (!body.ip_disclosure_level || !body.agent_id || !body.content_ref) {
    return new Response(JSON.stringify({ sent: false, reason: "missing required fields" }), { status: 400 });
  }

  // Veto check runs regardless of ip_disclosure_level — an unresolved contradiction is a
  // truth/quality concern, not an IP-disclosure concern, so "public" content doesn't skip it.
  const vetoVerdict = await verifyNoUnresolvedVeto(body);
  if (!vetoVerdict.ok) {
    await logAttempt(body, false, vetoVerdict.reason);
    return new Response(JSON.stringify({ sent: false, reason: vetoVerdict.reason }), { status: 409 }); // 409 Conflict, not 403 — distinct from an approval/permission failure
  }

  const verdict = await verifyApproval(body);
  await logAttempt(body, verdict.ok, verdict.reason);

  if (!verdict.ok) {
    return new Response(JSON.stringify({ sent: false, reason: verdict.reason }), { status: 403 });
  }

  return dispatch(body);
});
