"use client";

import { Lang, t } from "@/lib/i18n";

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  return (
    <footer className="text-center py-6 border-t border-border mt-auto">
      <a
        href="/terms"
        className="text-sm text-foreground hover:text-foreground transition-colors mx-2"
      >
        {t(lang, "footerTerms")}
      </a>
      <span className="text-sm text-foreground">|</span>
      <a
        href="/privacy"
        className="text-sm text-foreground hover:text-foreground transition-colors mx-2"
      >
        {t(lang, "footerPrivacy")}
      </a>
    </footer>
  );
}
