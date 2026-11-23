import { randomBytes } from "node:crypto";
import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const nonce = randomBytes(24).toString("base64");
  const isDev = process.env.NODE_ENV === "development";
  const policy = [
    "default-src 'none'",
    `script-src 'nonce-${nonce}' 'strict-dynamic'${isDev ? " 'unsafe-eval'" : ""}`,
    isDev ? "style-src 'self' 'unsafe-inline'" : `style-src 'self' 'nonce-${nonce}'`,
    "img-src 'self' data:",
    "font-src 'self'",
    isDev ? "connect-src 'self' ws: wss:" : "connect-src 'self'",
    "base-uri 'none'",
    "form-action 'none'",
    "frame-ancestors 'none'",
    "object-src 'none'",
  ].join("; ");

  // Next.js reads the request CSP when adding nonces to its framework scripts.
  const headers = new Headers(request.headers);
  headers.set("Content-Security-Policy", policy);

  const response = NextResponse.next({ request: { headers } });
  response.headers.set("Content-Security-Policy", policy);
  // Each document and its CSP must share a fresh nonce.
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}

export const config = {
  matcher: ["/((?!_next/|[^/]+\\.(?:ico|png|svg|webp|pdf)$).*)"],
};
