/* supabase-auth.js — client-side auth for Hotel NEXUS.
   Magic-link sign-in (no password to manage/leak) via Supabase Auth. This is what
   makes supabase-auth-scoped-policies.sql's auth.uid() checks actually work — without
   an authenticated session, the app has no access at all (not even anon-key read
   access), by design.

   NOT YET WIRED INTO delia-os-v5.html's UI. This is the standalone auth module;
   the "CONNECT SUPABASE MEMORY" modal still only handles URL/publishable-key entry,
   not sign-in. Integrating a sign-in step into that modal (or a new one) is the next
   piece, not done here — flagging rather than silently leaving it disconnected. */

(function (root) {
  'use strict';

  function createAuthClient(supabaseUrl, publishableKey, createClientFn) {
    // createClientFn: the createClient export from @supabase/supabase-js, passed in
    // rather than imported directly — this file has no build step (matches the rest
    // of this zero-dependency app), so the caller loads the Supabase JS CDN script
    // and passes window.supabase.createClient here.
    var client = createClientFn(supabaseUrl, publishableKey);

    async function sendMagicLink(email) {
      var { error } = await client.auth.signInWithOtp({
        email: email,
        options: { emailRedirectTo: window.location.href }
      });
      if (error) return { sent: false, reason: error.message };
      return { sent: true };
    }

    async function getSession() {
      var { data } = await client.auth.getSession();
      return data.session; // null if not signed in — callers should treat null as "no access"
    }

    async function signOut() {
      await client.auth.signOut();
    }

    function onAuthChange(callback) {
      // callback(session | null) — fires on sign-in (after clicking the magic link),
      // sign-out, and token refresh. The app should re-render its "connected" state
      // off this rather than assuming a session persists once seen.
      client.auth.onAuthStateChange(function (_event, session) {
        callback(session);
      });
    }

    return { client: client, sendMagicLink: sendMagicLink, getSession: getSession, signOut: signOut, onAuthChange: onAuthChange };
  }

  var SupabaseAuth = { createAuthClient: createAuthClient };

  if (typeof module !== 'undefined' && module.exports) module.exports = SupabaseAuth;
  else root.SupabaseAuth = SupabaseAuth;
})(typeof window !== 'undefined' ? window : globalThis);
