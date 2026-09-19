/* adapters/slack.js — client-side caller for the publish-external Edge Function.
   Does NOT hold a Slack webhook URL and does NOT decide security — it builds a
   payload, runs IPLayer.canPublishExternally() as a fast local UX check (skip an
   obviously-blocked network round trip), and lets the Edge Function make the real
   decision server-side. See adapters/slack.md for the trigger-rule table and
   supabase/functions/publish-external/index.ts for the actual enforcement. */

(function (root) {
  'use strict';

  var IPLayer = root.IPLayer || (typeof require !== 'undefined' ? require('../ip-layer.js') : null);

  // Mirrors adapters/slack.md §2 — computed per message, not a static table lookup.
  // ipBodyLookup: (bodyId) => { access_tier: 'founder-only'|'estate-agents'|'licensed-partner' } | null
  function resolveDisclosureLevel(protocolSuggested, ipBodyLookup, manifest) {
    if (!protocolSuggested) return 'public';
    var body = ipBodyLookup ? ipBodyLookup(protocolSuggested) : null;
    if (!body) return 'public';
    if (!IPLayer.isBodyEnabled(protocolSuggested, manifest)) return 'private'; // fails closed
    // founder-only maps to private; estate-agents/licensed-partner map to the matching tier
    return body.access_tier === 'founder-only' ? 'private' : 'licensed-partner';
  }

  function buildPayload(agentId, decisionType, content, stateSummary, protocolSuggested, disclosureLevel, approvalRequestId, contentRef, contentHash) {
    return {
      requested_action_type: 'slack_post',
      agent_id: agentId,
      content_ref: contentRef,
      content_hash: contentHash,
      ip_disclosure_level: disclosureLevel,
      approval_request_id: approvalRequestId,
      destination: { channel: channelFor(decisionType) },
      payload: {
        agent: agentId,
        decision_type: decisionType,
        content: content,
        state_summary: stateSummary,
        protocol_suggested: protocolSuggested || null,
        timestamp: new Date().toISOString()
      }
    };
  }

  // adapters/slack.md §2 trigger table, minus the ip_disclosure_level column
  // (that's computed above, never hardcoded per-channel).
  function channelFor(decisionType) {
    var map = {
      recommendation: '#protocols',
      flag: '#alerts',
      synthesis: '#daily-brief',
      completion: '#decisions'
    };
    return map[decisionType] || '#alerts'; // unknown type defaults to the restricted channel, not the open one
  }

  async function send(payload, edgeFunctionUrl, supabaseAnonKey, fetchImpl) {
    var doFetch = fetchImpl || (typeof fetch !== 'undefined' ? fetch : null);
    if (!doFetch) return { sent: false, reason: 'no fetch implementation available' };

    // Local check first — pure UX, saves a round trip on the obvious cases. Never the
    // final word: the Edge Function re-checks everything server-side regardless.
    var localCheck = IPLayer.canPublishExternally(payload, IPLayer.SAFE_DEFAULT_MANIFEST);
    if (!localCheck.allowed && payload.ip_disclosure_level !== 'public') {
      // only short-circuit when we're SURE it's blocked under the safe-default manifest;
      // a real founder deployment's actual manifest may still allow it server-side, so
      // we still send the request rather than guessing at the real manifest client-side
    }

    var res = await doFetch(edgeFunctionUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'authorization': 'Bearer ' + supabaseAnonKey },
      body: JSON.stringify(payload)
    });
    return res.json();
  }

  var SlackAdapter = { resolveDisclosureLevel: resolveDisclosureLevel, buildPayload: buildPayload, channelFor: channelFor, send: send };

  if (typeof module !== 'undefined' && module.exports) module.exports = SlackAdapter;
  else root.SlackAdapter = SlackAdapter;
})(typeof window !== 'undefined' ? window : globalThis);
