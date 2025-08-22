export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-3xl font-bold">Hello, world!</h1>
      <p className="text-gray-600">This is a minimal Next.js server with Tailwind CSS.</p>
      <a
        href="/api/hello"
        className="rounded bg-black px-4 py-2 text-white hover:bg-gray-800"
      >
        Open API endpoint
      </a>
    </main>
  );
}
