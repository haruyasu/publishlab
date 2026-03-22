import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "publishlab - TikTok Video Publisher",
  description:
    "Upload and publish video content directly to your TikTok account through a secure, authorized connection using the official TikTok API.",
  icons: { icon: "/app-icon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
