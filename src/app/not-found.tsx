export default function NotFound() {
  return (
    <main className="shell section">
      <h1>Page not found</h1>
      <p>The page you requested could not be found.</p>
      {/* Reload the full document so the browser receives a fresh policy and nonce. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a className="text-link" href="/">Return to the portfolio</a>
    </main>
  );
}
