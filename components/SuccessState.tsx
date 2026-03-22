"use client";

import { CheckCircle } from "lucide-react";
import { Lang, t } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

interface SuccessStateProps {
  lang: Lang;
  onPostAnother: () => void;
}

export default function SuccessState({
  lang,
  onPostAnother,
}: SuccessStateProps) {
  return (
    <div className="text-center space-y-4 py-6">
      <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto">
        <CheckCircle className="w-8 h-8 text-emerald-500" />
      </div>
      <h3 className="text-xl font-bold">{t(lang, "successTitle")}</h3>
      <p className="text-sm text-foreground leading-relaxed">
        {t(lang, "successMessage")}
      </p>
      <Button variant="outline" onClick={onPostAnother}>
        {t(lang, "postAnother")}
      </Button>
    </div>
  );
}
