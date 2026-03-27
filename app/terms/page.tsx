import type { Metadata } from "next";
import TermsContent from "@/components/TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service - publishlab",
  description:
    "Terms of Service for publishlab - Understand the terms and conditions for using our TikTok video publishing service.",
};

export default function TermsPage() {
  return <TermsContent />;
}
