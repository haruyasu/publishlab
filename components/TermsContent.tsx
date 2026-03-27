"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Lang } from "@/lib/i18n";

const content = {
  ja: {
    title: "利用規約",
    date: "施行日：2026年2月1日",
    sections: [
      {
        heading: "1. 利用規約への同意",
        body: "publishlab（以下「本サービス」）にアクセスまたは使用することにより、お客様はこれらの利用規約に拘束されることに同意したものとみなされます。本利用規約に同意されない場合は、本サービスの利用をお控えください。",
      },
      {
        heading: "2. サービスの説明",
        body: "publishlabは、公式TikTok APIを通じてユーザーが動画コンテンツをTikTokにアップロードおよび公開できるWebアプリケーションです。本サービスは以下の機能を提供します：",
        list: [
          "OAuth 2.0によるTikTokアカウントの安全な認証",
          "ブラウザからの動画ファイルのアップロード",
          "キャプション、ハッシュタグ、プライバシー設定付きのTikTokへの直接投稿",
        ],
      },
      {
        heading: "3. TikTokアカウントの認証",
        body: "本サービスを利用するには、TikTokのOAuth 2.0認証フローを通じてpublishlabにTikTokアカウントへのアクセスを許可する必要があります。",
        list: [
          "本サービスはあなたの動画コンテンツを投稿する目的でのみアクセス権を使用します",
          "TikTokアカウントの認証はいつでもアクセスを取り消すことで解除できます",
        ],
      },
      {
        heading: "4. ユーザーコンテンツ",
        body: "本サービスを通じてアップロードされる動画コンテンツおよび関連する情報については、お客様が全責任を負います。",
        list: [
          "アップロードするコンテンツの所有権を有するか、適切な許可を得ていること",
          "コンテンツがTikTokの利用規約およびコミュニティガイドラインに準拠していること",
          "コンテンツが第三者の知的財産権を侵害しないこと",
        ],
        after:
          "本サービスは投稿前のコンテンツの事前審査は行いません。アップロードされた動画ファイルは処理後に自動的に削除されます。",
      },
      {
        heading: "5. 禁止事項",
        body: "以下の行為は厳に禁止されます：",
        list: [
          "スパムや自動化された大量投稿",
          "TikTokの利用規約に違反するコンテンツの投稿",
          "本サービスの不正アクセスまたはリバースエンジニアリング",
          "他のユーザーのアカウントへの不正アクセス",
          "本サービスを利用した違法行為",
        ],
      },
      {
        heading: "6. サービスの可用性",
        body: "本サービスは「現状のまま」で提供されます。当社はサービスの中断なき利用を保証するものではありません。",
      },
      {
        heading: "7. 保証の免責",
        body: "本サービスは「現状のまま」および「利用可能な状態で」提供され、明示または黙示を問わず、いかなる種類の保証も行いません。",
      },
      {
        heading: "8. 責任の制限",
        body: "適用法が許す最大限の範囲において、publishlabは本サービスの使用から生じるいかなる損害についても責任を負いません。",
      },
      {
        heading: "9. 終了",
        body: "当社は事前の通知なく、いつでも本サービスの提供を終了することができます。",
      },
      {
        heading: "10. 本規約の変更",
        body: "当社は本利用規約を随時更新する場合があります。変更後も本サービスを継続して利用することにより、改定された利用規約に同意したものとみなされます。",
      },
      {
        heading: "11. お問い合わせ",
        body: "利用規約に関するご質問は以下までご連絡ください：\nメール: support@publishlab.jp",
      },
    ],
  },
  en: {
    title: "Terms of Service",
    date: "Effective Date: February 1, 2026",
    sections: [
      {
        heading: "1. Agreement to Terms",
        body: 'By accessing or using publishlab ("the Service"), you agree to be bound by these Terms of Service.',
      },
      {
        heading: "2. Description of Service",
        body: "publishlab is a web application that allows users to upload and publish video content to TikTok through the official TikTok API.",
        list: [
          "Secure authentication with TikTok accounts via OAuth 2.0",
          "Video file upload from your browser",
          "Direct publishing to TikTok with captions, hashtags, and privacy settings",
        ],
      },
      {
        heading: "3. TikTok Account Authentication",
        body: "To use the Service, you must authorize publishlab to access your TikTok account through TikTok's OAuth 2.0 authentication flow.",
        list: [
          "The Service uses access permissions solely for the purpose of posting your video content",
          "You can revoke TikTok account authorization at any time",
        ],
      },
      {
        heading: "4. User Content",
        body: "You are solely responsible for the video content and related information uploaded through the Service.",
        list: [
          "You own or have proper authorization for the content you upload",
          "Your content complies with TikTok's Terms of Service and Community Guidelines",
          "Your content does not infringe on any third party's intellectual property rights",
        ],
        after:
          "The Service does not pre-screen content before posting. Uploaded video files are automatically deleted after processing.",
      },
      {
        heading: "5. Prohibited Activities",
        body: "The following activities are strictly prohibited:",
        list: [
          "Spam or automated mass posting",
          "Posting content that violates TikTok's Terms of Service",
          "Unauthorized access or reverse engineering of the Service",
          "Unauthorized access to other users' accounts",
          "Using the Service for illegal activities",
        ],
      },
      {
        heading: "6. Service Availability",
        body: 'The Service is provided "as is." We do not guarantee uninterrupted use of the Service.',
      },
      {
        heading: "7. Disclaimer of Warranties",
        body: 'The Service is provided "as is" and "as available" without warranties of any kind, express or implied.',
      },
      {
        heading: "8. Limitation of Liability",
        body: "To the maximum extent permitted by applicable law, publishlab shall not be liable for any damages arising from use of the Service.",
      },
      {
        heading: "9. Termination",
        body: "We may terminate the provision of the Service at any time, for any reason, without prior notice.",
      },
      {
        heading: "10. Changes to These Terms",
        body: "We may update these Terms of Service from time to time. Your continued use of the Service after changes constitutes acceptance of the revised Terms.",
      },
      {
        heading: "11. Contact Us",
        body: "For questions regarding these Terms of Service, please contact us at:\nEmail: support@publishlab.jp",
      },
    ],
  },
};

export default function TermsContent() {
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
            {s.body.split("\n").map((line, j) => (
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
