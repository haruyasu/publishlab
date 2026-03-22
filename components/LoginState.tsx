"use client";

import { Lang, t } from "@/lib/i18n";
import { Upload, Video, BarChart3, Shield, Lock, Trash2 } from "lucide-react";

interface LoginStateProps {
  lang: Lang;
}

export default function LoginState({ lang }: LoginStateProps) {
  const handleLogin = () => {
    window.location.href = "/auth/tiktok";
  };

  return (
    <div className="w-full space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {t(lang, "heroTitle")}
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          {t(lang, "heroSubtitle")}
        </p>
        <div className="pt-2">
          <button
            onClick={handleLogin}
            className="inline-flex items-center justify-center h-12 px-8 gap-2.5 rounded-lg font-semibold text-base cursor-pointer transition-colors"
            style={{ backgroundColor: "#ffffff", color: "#000000" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#e4e4e7")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#ffffff")
            }
          >
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.34 0H10.88V14.96C10.88 16.61 9.54 17.96 7.88 17.96C6.22 17.96 4.88 16.61 4.88 14.96C4.88 13.34 6.19 12.01 7.78 11.96V8.48C4.28 8.53 1.42 11.42 1.42 14.96C1.42 18.53 4.32 21.42 7.9 21.42C11.48 21.42 14.38 18.5 14.38 14.96V7.28C15.72 8.24 17.36 8.8 19.08 8.82V5.34C16.44 5.24 14.34 2.88 14.34 0Z"
                fill="black"
              />
            </svg>
            {t(lang, "loginButton")}
          </button>
        </div>
        <p className="text-xs text-muted-foreground max-w-md mx-auto">
          {t(lang, "loginNote")}
        </p>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-center">
          {t(lang, "featuresTitle")}
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <FeatureCard
            icon={<Upload className="w-6 h-6" />}
            title={t(lang, "featureUploadTitle")}
            description={t(lang, "featureUploadDesc")}
          />
          <FeatureCard
            icon={<Video className="w-6 h-6" />}
            title={t(lang, "featurePublishTitle")}
            description={t(lang, "featurePublishDesc")}
          />
          <FeatureCard
            icon={<BarChart3 className="w-6 h-6" />}
            title={t(lang, "featureManageTitle")}
            description={t(lang, "featureManageDesc")}
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-center">
          {t(lang, "howItWorksTitle")}
        </h2>
        <div className="space-y-4">
          <StepItem
            number="1"
            title={t(lang, "step1Title")}
            description={t(lang, "step1Desc")}
          />
          <StepItem
            number="2"
            title={t(lang, "step2Title")}
            description={t(lang, "step2Desc")}
          />
          <StepItem
            number="3"
            title={t(lang, "step3Title")}
            description={t(lang, "step3Desc")}
          />
        </div>
      </section>

      {/* Data & Privacy Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-center">
          {t(lang, "privacySectionTitle")}
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <PrivacyCard
            icon={<Shield className="w-5 h-5" />}
            title={t(lang, "privacyMinimalTitle")}
            description={t(lang, "privacyMinimalDesc")}
          />
          <PrivacyCard
            icon={<Lock className="w-5 h-5" />}
            title={t(lang, "privacyEncryptedTitle")}
            description={t(lang, "privacyEncryptedDesc")}
          />
          <PrivacyCard
            icon={<Trash2 className="w-5 h-5" />}
            title={t(lang, "privacyAutoDeleteTitle")}
            description={t(lang, "privacyAutoDeleteDesc")}
          />
        </div>
      </section>

      {/* TikTok Data Usage Disclosure */}
      <section className="rounded-lg border border-border bg-card p-6 space-y-4">
        <h2 className="text-lg font-semibold">
          {t(lang, "dataUsageTitle")}
        </h2>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>{t(lang, "dataUsage1")}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>{t(lang, "dataUsage2")}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>{t(lang, "dataUsage3")}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>{t(lang, "dataUsage4")}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>{t(lang, "dataUsage5")}</span>
          </li>
        </ul>
      </section>

      {/* Bottom CTA */}
      <section className="text-center space-y-4 pb-4">
        <h2 className="text-2xl font-bold">
          {t(lang, "ctaTitle")}
        </h2>
        <p className="text-muted-foreground">
          {t(lang, "ctaSubtitle")}
        </p>
        <button
          onClick={handleLogin}
          className="inline-flex items-center justify-center h-12 px-8 gap-2.5 rounded-lg font-semibold text-base cursor-pointer transition-colors"
          style={{ backgroundColor: "#ffffff", color: "#000000" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#e4e4e7")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#ffffff")
          }
        >
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.34 0H10.88V14.96C10.88 16.61 9.54 17.96 7.88 17.96C6.22 17.96 4.88 16.61 4.88 14.96C4.88 13.34 6.19 12.01 7.78 11.96V8.48C4.28 8.53 1.42 11.42 1.42 14.96C1.42 18.53 4.32 21.42 7.9 21.42C11.48 21.42 14.38 18.5 14.38 14.96V7.28C15.72 8.24 17.36 8.8 19.08 8.82V5.34C16.44 5.24 14.34 2.88 14.34 0Z"
              fill="black"
            />
          </svg>
          {t(lang, "loginButton")}
        </button>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 space-y-3">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function StepItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
        {number}
      </div>
      <div className="space-y-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function PrivacyCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-5 space-y-2">
      <div className="flex items-center gap-2 text-primary">
        {icon}
        <h3 className="font-semibold text-sm text-foreground">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
