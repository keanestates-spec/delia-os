/* ip-layer.js — Hotel NEXUS build unit 2: manifest loader + fail-closed video gate.
   Implements SCHEMA.md §2.4 (injection mechanism) and §4 (enforcement rule).

   Core code (this file included) must never hardcode a body-of-work name or
   protocol name in a conditional — it only ever asks the manifest "is X enabled?".
   That's what keeps this file identical between the founder's deployment and a
   licensed core; only the manifest JSON differs. */

(function (root) {
  'use strict';

  var SAFE_DEFAULT_MANIFEST = Object.freeze({
    estate_agents_enabled: false,
    bodies_of_work: [],
    protocols: { subtraction: false, peptide: false, breathwork: false, calibration_loops: false }
  });

  // Local override (founder's real config, gitignored) takes precedence over the
  // committed public-safe default. A 404 on the local file is the expected shape
  // for any licensed deployment, not an error — swallow it and fall through.
  async function loadManifest(fetchImpl) {
    var doFetch = fetchImpl || (typeof fetch !== 'undefined' ? fetch : null);
    if (!doFetch) return SAFE_DEFAULT_MANIFEST;

    var candidates = ['./ip_layer_manifest.local.json', './ip_layer_manifest.json'];
    for (var i = 0; i < candidates.length; i++) {
      try {
        var res = await doFetch(candidates[i]);
        if (res && res.ok) {
          var json = await res.json();
          return normalizeManifest(json);
        }
      } catch (e) { /* try next candidate */ }
    }
    return SAFE_DEFAULT_MANIFEST;
  }

  function normalizeManifest(raw) {
    return {
      estate_agents_enabled: raw.estate_agents_enabled === true,
      bodies_of_work: Array.isArray(raw.bodies_of_work) ? raw.bodies_of_work.slice() : [],
      protocols: Object.assign({}, SAFE_DEFAULT_MANIFEST.protocols, raw.protocols || {})
    };
  }

  function isBodyEnabled(bodyId, manifest) {
    manifest = manifest || SAFE_DEFAULT_MANIFEST;
    return manifest.estate_agents_enabled === true && manifest.bodies_of_work.indexOf(bodyId) !== -1;
  }

  function isProtocolEnabled(protocolName, manifest) {
    manifest = manifest || SAFE_DEFAULT_MANIFEST;
    return manifest.estate_agents_enabled === true && manifest.protocols[protocolName] === true;
  }

  // SCHEMA.md §4 enforcement rule, generalized beyond video: refuse any non-public
  // outbound payload (video render, Slack post, email, anything leaving the system)
  // unless the deployment has estate_agents_enabled AND the payload carries an
  // approval_request_id. Fails closed — an unrecognized disclosure level is
  // treated as non-public, not as public. This is the ONE check every external-output
  // adapter must call before sending anything. Do not reimplement this logic per adapter.
  function canPublishExternally(payload, manifest) {
    manifest = manifest || SAFE_DEFAULT_MANIFEST;

    if (!payload || typeof payload.ip_disclosure_level !== 'string') {
      return { allowed: false, reason: 'missing ip_disclosure_level' };
    }
    if (payload.ip_disclosure_level === 'public') {
      return { allowed: true };
    }
    if (manifest.estate_agents_enabled === true && payload.approval_request_id) {
      return { allowed: true };
    }
    return {
      allowed: false,
      reason: manifest.estate_agents_enabled !== true
        ? 'deployment does not have estate_agents_enabled — this is a licensed core'
        : 'proprietary payload requires an approval_request_id before it can be sent externally'
    };
  }

  var IPLayer = {
    SAFE_DEFAULT_MANIFEST: SAFE_DEFAULT_MANIFEST,
    loadManifest: loadManifest,
    normalizeManifest: normalizeManifest,
    isBodyEnabled: isBodyEnabled,
    isProtocolEnabled: isProtocolEnabled,
    canPublishExternally: canPublishExternally,
    canRenderVideoScript: canPublishExternally  // alias: video was the first caller, not a special case
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = IPLayer;
  } else {
    root.IPLayer = IPLayer;
  }
})(typeof window !== 'undefined' ? window : globalThis);
