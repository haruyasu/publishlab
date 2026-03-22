"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Lang } from "@/lib/i18n";

interface Section {
  heading: string;
  body?: string;
  list?: string[];
  after?: string;
  subsections?: { subheading: string; body?: string; list?: string[] }[];
}

const content: Record<
  Lang,
  { title: string; date: string; sections: Section[] }
> = {
  ja: {
    title: "プライバシーポリシー",
    date: "施行日：2026年2月1日",
    sections: [
      {
        heading: "1. はじめに",
        body: "このプライバシーポリシーは、publishlab（以下「本サービス」「当社」）がWebアプリケーションの利用者から収集する情報の取り扱いについて説明します。",
      },
      {
        heading: "2. 収集する情報",
        body: "当社は以下の種類の情報を収集します：",
        subsections: [
          {
            subheading: "a) TikTokアカウント情報",
            list: [
              "OAuthアクセストークンおよびリフレッシュトークン",
              "TikTok Open ID",
              "上記以外のパスワード、メールアドレス等へのアクセスや保存は行いません",
            ],
          },
          {
            subheading: "b) ユーザーアップロードコンテンツ",
            list: [
              "動画ファイル",
              "キャプションとハッシュタグ",
              "公開範囲設定",
            ],
          },
          {
            subheading: "c) 技術情報",
            list: ["セッションデータ", "サーバーログ"],
          },
          {
            subheading: "d) Cookie",
            body: "本サービスはログイン状態およびアプリケーション設定のための必須のCookieのみ使用します。広告目的やサードパーティの追跡Cookieは使用しません。",
          },
        ],
      },
      {
        heading: "3. 情報の使用方法",
        body: "収集した情報は以下の目的でのみ使用します：",
        list: [
          "TikTokアカウントの認証およびセッションの維持",
          "お客様の要求に応じてTikTokに動画コンテンツを公開",
          "本サービスの提供および改善",
          "技術的問題の診断および修正",
        ],
      },
      {
        heading: "4. データの共有",
        body: "当社はお客様の個人情報を第三者に販売、レンタル、または共有しません。ただし：",
        list: [
          "TikTokとの共有：コンテンツの公開のために公式APIを通じてTikTokに送信します",
          "法的な要請に対応するために必要な場合",
        ],
      },
      {
        heading: "5. データの保持",
        list: [
          "動画ファイル：アップロード処理中のみ一時保存、完了後に自動削除",
          "OAuthトークン：セッション期間のみ保存、ログアウト時に削除",
          "サーバーログ：最大30日間保持後に自動削除",
        ],
      },
      {
        heading: "6. データのセキュリティ",
        body: "以下の対策を講じています：",
        list: [
          "HTTPS暗号化によるデータ転送",
          "OAuthトークンの安全な保存",
          "業界標準のセキュリティプラクティス",
          "定期的なセキュリティレビュー",
        ],
      },
      {
        heading: "7. ユーザーの権利",
        list: [
          "TikTokアカウントの接続をいつでも解除する権利",
          "アカウントデータの削除を要求する権利",
          "収集したデータの詳細を問い合わせる権利",
        ],
      },
      {
        heading: "8. 子どものプライバシー",
        body: "本サービスは13歳未満の子どもを対象としていません。",
      },
      {
        heading: "9. 本ポリシーの変更",
        body: "当社は必要に応じてこのプライバシーポリシーを更新する場合があります。",
      },
      {
        heading: "10. お問い合わせ",
        body: "ご質問は以下までご連絡ください：\nメール: support@publishlab.jp",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    date: "Effective Date: February 1, 2026",
    sections: [
      {
        heading: "1. Introduction",
        body: 'This Privacy Policy explains how publishlab ("the Service", "we") handles information collected from users of our web application.',
      },
      {
        heading: "2. Information We Collect",
        body: "We collect the following types of information:",
        subsections: [
          {
            subheading: "a) TikTok Account Information",
            list: [
              "OAuth access tokens and refresh tokens",
              "TikTok Open ID",
              "We do not access or store your TikTok password, email, or other personal data",
            ],
          },
          {
            subheading: "b) User-Uploaded Content",
            list: [
              "Video files uploaded for publishing",
              "Captions and hashtags",
              "Privacy settings",
            ],
          },
          {
            subheading: "c) Technical Information",
            list: ["Session data", "Server logs for debugging"],
          },
          {
            subheading: "d) Cookies",
            body: "The Service uses only essential cookies. We do not use advertising or third-party tracking cookies.",
          },
        ],
      },
      {
        heading: "3. How We Use Information",
        body: "We use collected information only for:",
        list: [
          "Authentication and session maintenance",
          "Publishing video content to TikTok",
          "Providing and improving the Service",
          "Diagnosing and fixing technical issues",
        ],
      },
      {
        heading: "4. Data Sharing",
        body: "We do not sell, rent, or share your personal information, except:",
        list: [
          "Sharing with TikTok through the official API for content publishing",
          "When necessary to respond to legal requests",
        ],
      },
      {
        heading: "5. Data Retention",
        list: [
          "Video files: Temporarily stored during upload, automatically deleted after",
          "OAuth tokens: Stored only for session duration, deleted on logout",
          "Server logs: Retained for up to 30 days",
        ],
      },
      {
        heading: "6. Data Security",
        body: "We take the following measures:",
        list: [
          "HTTPS encryption for all data transfers",
          "Secure storage of OAuth tokens",
          "Industry-standard security practices",
          "Regular security reviews",
        ],
      },
      {
        heading: "7. User Rights",
        list: [
          "Disconnect your TikTok account at any time",
          "Request deletion of your account data",
          "Inquire about collected data",
        ],
      },
      {
        heading: "8. Children's Privacy",
        body: "The Service is not intended for children under 13.",
      },
      {
        heading: "9. Changes to This Policy",
        body: "We may update this Privacy Policy as needed.",
      },
      {
        heading: "10. Contact Us",
        body: "For questions, please contact us at:\nEmail: support@publishlab.jp",
      },
    ],
  },
};

export default function PrivacyPage() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("publishlab-lang");
    if (saved === "ja" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("publishlab-lang", lang);
  }, [lang]);

  const c = content[lang];

  return (
    <>
      <Header lang={lang} onLangChange={setLang} />
      <main className="max-w-[768px] mx-auto px-6 py-6 pb-16">
        <h1 className="text-3xl font-bold mt-6 mb-2">{c.title}</h1>
        <p className="text-sm text-muted-foreground mb-8">{c.date}</p>
        {c.sections.map((s, i) => (
          <div key={i}>
            <h2 className="text-lg font-semibold mt-8 mb-3">{s.heading}</h2>
            {s.body?.split("\n").map((line, j) => (
              <p
                key={j}
                className="text-sm text-muted-foreground mb-3 leading-7"
              >
                {line}
              </p>
            ))}
            {s.list && (
              <ul className="list-disc pl-5 mb-3 space-y-1.5">
                {s.list.map((item, j) => (
                  <li
                    key={j}
                    className="text-sm text-muted-foreground leading-6"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {s.subsections?.map((sub, k) => (
              <div key={k}>
                <h3 className="text-base font-semibold mt-5 mb-2">
                  {sub.subheading}
                </h3>
                {sub.body && (
                  <p className="text-sm text-muted-foreground mb-3 leading-7">
                    {sub.body}
                  </p>
                )}
                {sub.list && (
                  <ul className="list-disc pl-5 mb-3 space-y-1.5">
                    {sub.list.map((item, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted-foreground leading-6"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            {s.after && (
              <p className="text-sm text-muted-foreground mb-3 leading-7">
                {s.after}
              </p>
            )}
          </div>
        ))}
      </main>
      <Footer lang={lang} />
    </>
  );
}
