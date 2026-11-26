import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { portrait, profiles } from "./portfolio-content";

const site = "https://smrutiranjanpradhan.co.in";
const name = "Smruti Ranjan Pradhan";
const description = "Smruti Ranjan Pradhan investigates threats and works across threat intelligence, authorized web application testing, OSINT, and incident response.";

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name,
  url: site,
  jobTitle: "Cybersecurity professional",
  image: site + portrait,
  sameAs: profiles.map(({ href }) => href),
};

export const metadata: Metadata = {
  metadataBase: new URL(site),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: name + " | Cybersecurity Portfolio",
    description,
    images: [{ url: portrait, width: 1120, height: 840, alt: "Portrait of " + name }],
  },
  twitter: { card: "summary_large_image" },
  title: "Smruti Ranjan Pradhan | Cybersecurity Portfolio",
  icons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAbklEQVR42mMUkFBgoCVgYqAxGLWAIGDBJTHzwmqSDEo3CMUqzoiZikg1Gr81LKS6iFQfM2FVR6rpcC2Y1owm00GcDwgmEiITwmgcjKYisoum0TgYxBbgKtaJLEtIqNEoqTgJ1Mk0r/RHU9FwswAAxmofZ7k4E/8AAAAASUVORK5CYII=",
  description,
};

export const viewport: Viewport = {
  themeColor: "#101f1a",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  // The proxy supplies the policy and Next.js uses this same nonce for its scripts.
  const policy = (await headers()).get("content-security-policy");
  const nonce = policy?.match(/(?:^|; )script-src 'nonce-([A-Za-z0-9+/=]+)'/)?.[1];
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
