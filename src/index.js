export default {
  async fetch(request, env) {
    const expected = "Basic " + btoa(`${env.DEMO_USER}:${env.DEMO_PASS}`);
    if (request.headers.get("Authorization") !== expected) {
      return new Response("Authentication required", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="LAB59 demo", charset="UTF-8"',
          "Cache-Control": "no-store"
        }
      });
    }
    return env.ASSETS.fetch(request);
  }
};