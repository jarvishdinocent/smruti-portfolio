# Smruti Ranjan Pradhan’s cybersecurity portfolio

Run the Next.js site locally with the repository’s locked dependencies.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. To verify behavior under the production Content Security Policy, run `npm run lint`, `npm run build`, and `npm run start`.

Homepage copy, public work, article links, and profile destinations are defined in `src/app/portfolio-content.ts` and rendered by `src/app/page.tsx`. Add a Substack link to `profiles` when the public profile URL has been confirmed. Add the ZAP crawling article to `articles` after confirming its publication URL and date.

`src/proxy.ts` generates a fresh CSP nonce for each page response. Deploy with a Next.js server runtime that supports Proxy and dynamic rendering. The vulnerability reporting contact is served from `public/.well-known/security.txt`.
