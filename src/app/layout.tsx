import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

const site = "https://smrutiranjanpradhan.co.in";
const name = "Smruti Ranjan Pradhan";
const description = "SOC Engineer working across threat hunting, digital forensics and incident response, penetration testing, threat intelligence, and OSINT.";

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name,
  url: site,
  jobTitle: "SOC Engineer",
  image: site + "/portfolio-portrait.webp",
  sameAs: [
    "https://www.linkedin.com/in/smruti-ranjan-pradhan-7b878514a",
    "https://github.com/jarvishdinocent",
    "https://medium.com/@sforsmruti",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(site),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: name + " | Cybersecurity Portfolio",
    description,
    images: [{ url: "/portfolio-portrait.webp", width: 1120, height: 840, alt: "Portrait of " + name }],
  },
  twitter: { card: "summary_large_image" },
  title: "Smruti Ranjan Pradhan | Cybersecurity Portfolio",
  icons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAbklEQVR42mMUkFBgoCVgYqAxGLWAIGDBJTHzwmqSDEo3CMUqzoiZikg1Gr81LKS6iFQfM2FVR6rpcC2Y1owm00GcDwgmEiITwmgcjKYisoum0TgYxBbgKtaJLEtIqNEoqTgJ1Mk0r/RHU9FwswAAxmofZ7k4E/8AAAAASUVORK5CYII=",
  description,
};

export const viewport: Viewport = {
  themeColor: "#101820",
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
