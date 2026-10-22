// The site is static files. Only the score keeper under /skor runs through here: it is a
// single-page app, so a /skor address that isn't a file gets the app's own index.html.
export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;
    return env.ASSETS.fetch(new Request(new URL('/skor/', request.url), request));
  },
};
