export type Lang = "en" | "ja";

export const translations = {
  en: {
    // Hero
    heroTitle: "Publish Videos to TikTok with Ease",
    heroSubtitle:
      "publishlab is a simple web tool that lets you upload and publish video content directly to your TikTok account through the official TikTok API.",

    // Login
    loginButton: "Continue with TikTok",
    loginNote:
      "By continuing, you agree to our Terms of Service and Privacy Policy. We only request the minimum permissions needed to post videos on your behalf.",

    // Features
    featuresTitle: "What You Can Do",
    featureUploadTitle: "Upload Videos",
    featureUploadDesc:
      "Upload video files directly from your browser with a simple drag-and-drop interface. No software installation required.",
    featurePublishTitle: "Publish to TikTok",
    featurePublishDesc:
      "Post videos to your TikTok account with custom captions, hashtags, and privacy settings — all through the official API.",
    featureManageTitle: "View Your Videos",
    featureManageDesc:
      "Browse your published TikTok videos with view counts, likes, and comments — all in one dashboard.",

    // How It Works
    howItWorksTitle: "How It Works",
    step1Title: "Connect Your TikTok Account",
    step1Desc:
      "Sign in securely using TikTok's official OAuth 2.0 authentication. We never see or store your TikTok password.",
    step2Title: "Upload Your Video",
    step2Desc:
      "Choose a video file, add a caption with hashtags, and select your preferred privacy setting (Public, Friends, or Only Me).",
    step3Title: "Publish Instantly",
    step3Desc:
      "Your video is published directly to your TikTok account via the official API. It will appear on your profile shortly after.",

    // Privacy Section
    privacySectionTitle: "Your Data, Your Control",
    privacyMinimalTitle: "Minimal Permissions",
    privacyMinimalDesc:
      "We only request permissions needed to post videos and view your basic profile. No access to your followers, messages, or personal data.",
    privacyEncryptedTitle: "Encrypted Sessions",
    privacyEncryptedDesc:
      "All authentication tokens are stored in encrypted, httpOnly cookies. Data is transmitted over HTTPS only.",
    privacyAutoDeleteTitle: "Auto-Delete",
    privacyAutoDeleteDesc:
      "Uploaded video files are automatically deleted from our servers after publishing. We do not retain your content.",

    // Data Usage Disclosure
    dataUsageTitle: "How We Use TikTok Data",
    dataUsage1:
      "We access your TikTok display name and avatar solely to show your connected account status within the app.",
    dataUsage2:
      "We use the video.publish and video.upload permissions only when you explicitly choose to post a video.",
    dataUsage3:
      "We use the video.list permission to display your published videos and their public statistics (views, likes, comments) within the app.",
    dataUsage4:
      "We do not store, share, or sell any TikTok user data to third parties. Your data is never used for advertising or analytics purposes.",
    dataUsage5:
      "You can disconnect your TikTok account and delete all associated data at any time by logging out.",

    // Bottom CTA
    ctaTitle: "Ready to Get Started?",
    ctaSubtitle:
      "Connect your TikTok account and start publishing videos today.",

    // Post-login states
    statusConnected: "Connected to TikTok",
    statusDisconnected: "Not connected",
    videoFileLabel: "Video File",
    videoFilePlaceholder: "Click or drag & drop to select a video",
    captionLabel: "Caption",
    captionPlaceholder: "Enter caption for your video #hashtag",
    privacyLabel: "Privacy",
    privacyPublic: "Public",
    privacyFriends: "Friends",
    privacySelf: "Only Me (for testing)",
    aiContent: "AI-generated content",
    postButton: "Post to TikTok",
    postingButton: "Posting...",
    logoutButton: "Disconnect account",
    successTitle: "Posted Successfully!",
    successMessage:
      "Your video has been published to your TikTok account. It may take a few moments to appear on your profile.",
    postAnother: "Post Another Video",
    footerTerms: "Terms of Service",
    footerPrivacy: "Privacy Policy",
    tabPost: "Post",
    tabMyVideos: "My Videos",
    videoViews: "views",
    videoLikes: "likes",
    videoComments: "comments",
    noVideosYet: "No videos found",
  },
  ja: {
    // Hero
    heroTitle: "TikTokへの動画投稿をもっと簡単に",
    heroSubtitle:
      "publishlabは、TikTok公式APIを通じて、お使いのTikTokアカウントに直接動画をアップロード・投稿できるシンプルなWebツールです。",

    // Login
    loginButton: "TikTokでログイン",
    loginNote:
      "続行することで、利用規約とプライバシーポリシーに同意したものとみなされます。動画の投稿に必要な最小限の権限のみをリクエストします。",

    // Features
    featuresTitle: "できること",
    featureUploadTitle: "動画アップロード",
    featureUploadDesc:
      "ブラウザから直接、ドラッグ＆ドロップで簡単に動画ファイルをアップロード。ソフトウェアのインストールは不要です。",
    featurePublishTitle: "TikTokに投稿",
    featurePublishDesc:
      "キャプション、ハッシュタグ、プライバシー設定を付けて、公式API経由でTikTokアカウントに動画を投稿できます。",
    featureManageTitle: "動画を管理",
    featureManageDesc:
      "投稿済みのTikTok動画を再生数、いいね数、コメント数とともに一覧で確認できます。",

    // How It Works
    howItWorksTitle: "使い方",
    step1Title: "TikTokアカウントを接続",
    step1Desc:
      "TikTok公式のOAuth 2.0認証で安全にログイン。TikTokのパスワードを当サービスが見ることや保存することはありません。",
    step2Title: "動画をアップロード",
    step2Desc:
      "動画ファイルを選択し、キャプションやハッシュタグを追加、公開範囲（公開・友達のみ・自分のみ）を設定します。",
    step3Title: "すぐに投稿",
    step3Desc:
      "公式API経由でTikTokアカウントに直接投稿されます。まもなくプロフィールに表示されます。",

    // Privacy Section
    privacySectionTitle: "あなたのデータはあなたのもの",
    privacyMinimalTitle: "最小限の権限",
    privacyMinimalDesc:
      "動画の投稿と基本プロフィールの表示に必要な権限のみをリクエストします。フォロワー、メッセージ、個人データへのアクセスはありません。",
    privacyEncryptedTitle: "暗号化されたセッション",
    privacyEncryptedDesc:
      "認証トークンは暗号化されたhttpOnly Cookieに保存。データ通信はすべてHTTPSで行われます。",
    privacyAutoDeleteTitle: "自動削除",
    privacyAutoDeleteDesc:
      "アップロードされた動画ファイルは投稿完了後にサーバーから自動削除されます。コンテンツを保持することはありません。",

    // Data Usage Disclosure
    dataUsageTitle: "TikTokデータの利用について",
    dataUsage1:
      "TikTokの表示名とアバターは、アプリ内でアカウント接続状態を表示するためにのみ使用します。",
    dataUsage2:
      "video.publishおよびvideo.upload権限は、お客様が明示的に動画投稿を選択した場合にのみ使用します。",
    dataUsage3:
      "video.list権限は、投稿済み動画とその公開統計情報（再生数、いいね数、コメント数）をアプリ内に表示するために使用します。",
    dataUsage4:
      "TikTokユーザーデータを第三者に保存、共有、販売することはありません。広告やアナリティクス目的での利用も行いません。",
    dataUsage5:
      "ログアウトすることで、いつでもTikTokアカウントの接続を解除し、関連データをすべて削除できます。",

    // Bottom CTA
    ctaTitle: "さっそく始めましょう",
    ctaSubtitle: "TikTokアカウントを接続して、今すぐ動画を投稿しましょう。",

    // Post-login states
    statusConnected: "TikTokに接続済み",
    statusDisconnected: "未接続",
    videoFileLabel: "動画ファイル",
    videoFilePlaceholder: "クリックまたはドラッグ＆ドロップで動画を選択",
    captionLabel: "キャプション",
    captionPlaceholder: "動画のキャプションを入力 #ハッシュタグ",
    privacyLabel: "プライバシー",
    privacyPublic: "公開",
    privacyFriends: "友達のみ",
    privacySelf: "自分のみ（テスト用）",
    aiContent: "AI生成コンテンツ",
    postButton: "TikTokに投稿",
    postingButton: "投稿中...",
    logoutButton: "アカウント接続解除",
    successTitle: "投稿が完了しました！",
    successMessage:
      "動画がTikTokアカウントに公開されました。プロフィールに表示されるまで少し時間がかかる場合があります。",
    postAnother: "別の動画を投稿",
    footerTerms: "利用規約",
    footerPrivacy: "プライバシーポリシー",
    tabPost: "投稿",
    tabMyVideos: "マイ動画",
    videoViews: "再生",
    videoLikes: "いいね",
    videoComments: "コメント",
    noVideosYet: "動画が見つかりません",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["en"];

export function t(lang: Lang, key: TranslationKey): string {
  return translations[lang][key];
}
