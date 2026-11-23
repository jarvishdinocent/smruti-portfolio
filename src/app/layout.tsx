import type { Metadata, Viewport } from "next";
import { connection } from "next/server";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smruti Ranjan Pradhan | Cybersecurity Portfolio",
  icons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAbklEQVR42mMUkFBgoCVgYqAxGLWAIGDBJTHzwmqSDEo3CMUqzoiZikg1Gr81LKS6iFQfM2FVR6rpcC2Y1owm00GcDwgmEiITwmgcjKYisoum0TgYxBbgKtaJLEtIqNEoqTgJ1Mk0r/RHU9FwswAAxmofZ7k4E/8AAAAASUVORK5CYII=",
  description: "Cybersecurity portfolio of Smruti Ranjan Pradhan, covering penetration testing, SOC operations, digital forensics and incident response.",
};

export const viewport: Viewport = {
  themeColor: "#101820",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  await connection();
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
