export async function GET() {
  return new Response("Hello, world!", {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
