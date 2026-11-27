import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { portrait, profiles } from "./portfolio-content";

const site = "https://smrutiranjanpradhan.co.in";
const name = "Smruti Ranjan Pradhan";
const title = name + " | Cybersecurity Portfolio";
const description = "Smruti Ranjan Pradhan is a cybersecurity professional focused on threat hunting, threat intelligence, web application security, OSINT, and incident investigation.";

const person = {
  "@type": "Person",
  name,
  url: site,
  jobTitle: "Cybersecurity professional",
  image: site + portrait,
  sameAs: profiles.map(({ href }) => href),
  description,
};

const profilePage = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: title,
  url: site + "/",
  mainEntity: person,
};

export const metadata: Metadata = {
  metadataBase: new URL(site),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
    images: [{ url: portrait, width: 1120, height: 840, alt: "Portrait of " + name }],
  },
  twitter: { card: "summary_large_image" },
  title,
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePage).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
