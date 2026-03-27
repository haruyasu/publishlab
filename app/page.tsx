import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "publishlab - TikTok Video Publisher",
  description:
    "Upload and publish video content directly to your TikTok account through a secure, authorized connection using the official TikTok API.",
};

export default function HomePage() {
  return <HomeContent />;
}
