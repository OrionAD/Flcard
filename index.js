export default {
  async fetch(request, env) {
    const html = await fetch("https://raw.githubusercontent.com/OrionAD/Flcard/main/index.html").then(r => r.text());
    return new Response(html, {
      headers: { "content-type": "text/html" }
    });
  }
}
