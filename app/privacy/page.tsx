import type { Metadata } from "next";
import PrivacyContent from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy - publishlab",
  description:
    "Privacy Policy for publishlab - Learn how we handle your data when using our TikTok video publishing service.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
