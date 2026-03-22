"use client";

import { Lang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
}

export default function Header({ lang, onLangChange }: HeaderProps) {
  return (
    <header className="w-full px-6 py-4">
      <div className="flex items-center justify-between max-w-[768px] mx-auto">
        <a
          href="/"
          className="flex items-center gap-2.5 no-underline text-foreground"
        >
          <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-400 to-rose-500 flex items-center justify-center font-bold text-white text-sm">
            P
          </div>
          <span className="font-semibold">publishlab</span>
        </a>
        <div className="flex rounded border border-border overflow-hidden">
          <Button
            variant={lang === "en" ? "default" : "ghost"}
            size="sm"
            className="rounded-none h-7 px-3 text-xs"
            onClick={() => onLangChange("en")}
          >
            EN
          </Button>
          <Button
            variant={lang === "ja" ? "default" : "ghost"}
            size="sm"
            className="rounded-none h-7 px-3 text-xs"
            onClick={() => onLangChange("ja")}
          >
            JA
          </Button>
        </div>
      </div>
    </header>
  );
}
