const translations = {
  en: {
    heroTitle: 'publishlab',
    heroSubtitle: 'TikTok Video Publisher',
    heroDescription: 'A web application that allows you to upload and publish video content directly to your TikTok account through a secure, authorized connection using the official TikTok API.',
    featureAuthTitle: 'Secure Authentication',
    featureAuthDesc: 'Log in securely with your TikTok account using OAuth 2.0 without sharing your TikTok password.',
    featureUploadTitle: 'Video Upload',
    featureUploadDesc: 'Upload video files directly from your browser. Supports MP4, WebM, and MOV formats.',
    featurePublishTitle: 'Direct Publishing',
    featurePublishDesc: 'Publish videos directly to TikTok with captions, hashtags, and privacy settings.',
    howItWorksTitle: 'How It Works',
    step1Title: 'Connect Your TikTok Account',
    step1Desc: 'Click the login button and authorize publishlab to access your TikTok account via the official TikTok OAuth flow.',
    step2Title: 'Upload Your Video',
    step2Desc: 'Select or drag-and-drop a video file from your device. Add a caption and hashtags for your post.',
    step3Title: 'Publish to TikTok',
    step3Desc: 'Configure your content and privacy settings and publish. Your video will be posted directly to your TikTok account.',
    getStartedTitle: 'Get Started',
    loginDescription: 'Connect your TikTok account to start uploading and publishing videos directly from publishlab.',
    loginButton: 'Continue with TikTok',
    loginNote: 'By continuing, you agree to our Terms of Service and Privacy Policy. We only request the minimum permissions needed to post videos on your behalf.',
    statusConnected: 'Connected to TikTok',
    statusDisconnected: 'Not connected',
    videoFileLabel: 'Video File',
    videoFilePlaceholder: 'Click or drag & drop to select a video',
    captionLabel: 'Caption',
    captionPlaceholder: 'Enter caption for your video #hashtag',
    privacyLabel: 'Privacy',
    privacyOption: 'Only Me (for testing)',
    privacyPublic: 'Public',
    privacyFriends: 'Friends',
    privacySelf: 'Only Me (for testing)',
    aiContent: 'AI-generated content',
    postButton: 'Post to TikTok',
    postingButton: 'Posting...',
    logoutButton: 'Disconnect account',
    successTitle: 'Posted Successfully!',
    successMessage: 'Your video has been published to your TikTok account. It may take a few moments to appear on your profile.',
    postAnother: 'Post Another Video',
    footerTerms: 'Terms of Service',
    footerPrivacy: 'Privacy Policy',
    backToHome: '< Back to Home',
  },
  ja: {
    heroTitle: 'publishlab',
    heroSubtitle: 'TikTok Video Publisher',
    heroDescription: 'TikTokの公式APIを使用して、安全な認証接続を通じてTikTokアカウントに直接動画コンテンツをアップロード・公開できるWebアプリケーションです。',
    featureAuthTitle: 'セキュア認証',
    featureAuthDesc: 'OAuth 2.0を使用して、TikTokのパスワードを共有せずにTikTokアカウントに安全にログインできます。',
    featureUploadTitle: '動画アップロード',
    featureUploadDesc: 'ブラウザから直接動画ファイルをアップロード。MP4、WebM、MOV形式に対応しています。',
    featurePublishTitle: 'ダイレクト投稿',
    featurePublishDesc: 'キャプション、ハッシュタグ、プライバシー設定付きでTikTokに直接動画を投稿できます。',
    howItWorksTitle: '使い方',
    step1Title: 'TikTokアカウントを接続',
    step1Desc: 'ログインボタンをクリックし、TikTokの公式OAuthフローでpublishlabがTikTokアカウントにアクセスすることを許可します。',
    step2Title: '動画をアップロード',
    step2Desc: 'デバイスから動画ファイルを選択またはドラッグ＆ドロップします。投稿にキャプションとハッシュタグを追加できます。',
    step3Title: 'TikTokに投稿',
    step3Desc: 'コンテンツとプライバシー設定を構成して投稿します。動画はTikTokアカウントに直接投稿されます。',
    getStartedTitle: 'はじめる',
    loginDescription: 'TikTokアカウントを接続して、publishlabから直接動画のアップロードと投稿を始めましょう。',
    loginButton: 'TikTokでログイン',
    loginNote: '続行することで、利用規約とプライバシーポリシーに同意したものとみなされます。動画の投稿に必要な最小限の権限のみをリクエストします。',
    statusConnected: 'TikTokに接続済み',
    statusDisconnected: '未接続',
    videoFileLabel: '動画ファイル',
    videoFilePlaceholder: 'クリックまたはドラッグ＆ドロップで動画を選択',
    captionLabel: 'キャプション',
    captionPlaceholder: '動画のキャプションを入力 #ハッシュタグ',
    privacyLabel: 'プライバシー',
    privacyOption: '自分のみ（テスト用）',
    privacyPublic: '公開',
    privacyFriends: '友達のみ',
    privacySelf: '自分のみ（テスト用）',
    aiContent: 'AI生成コンテンツ',
    postButton: 'TikTokに投稿',
    postingButton: '投稿中...',
    logoutButton: 'アカウント接続解除',
    successTitle: '投稿が完了しました！',
    successMessage: '動画がTikTokアカウントに公開されました。プロフィールに表示されるまで少し時間がかかる場合があります。',
    postAnother: '別の動画を投稿',
    footerTerms: '利用規約',
    footerPrivacy: 'プライバシーポリシー',
    backToHome: '< ホームに戻る',
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('publishlab-lang', lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
}

/* ===== App State Management ===== */
function showState(stateId) {
  document.querySelectorAll('.app-state').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(stateId);
  if (target) {
    target.classList.add('active');
  }
}

function initApp() {
  const loginBtn = document.getElementById('btn-tiktok-login');
  const postBtn = document.getElementById('btn-post');
  const postAnotherBtn = document.getElementById('btn-post-another');
  const logoutBtn = document.getElementById('btn-logout');
  const fileInput = document.getElementById('video-file-input');
  const fileUpload = document.getElementById('file-upload-area');

  if (!loginBtn) return;

  // Login button - simulate OAuth flow
  loginBtn.addEventListener('click', () => {
    loginBtn.textContent = currentLang === 'ja' ? '接続中...' : 'Connecting...';
    loginBtn.disabled = true;
    setTimeout(() => {
      showState('state-form');
      loginBtn.disabled = false;
      setLanguage(currentLang);
    }, 1500);
  });

  // File upload
  if (fileInput && fileUpload) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const uploadText = fileUpload.querySelector('.file-upload-text');
        const fileInfo = fileUpload.querySelector('.file-info');
        const uploadIcon = fileUpload.querySelector('.file-upload-icon');
        fileUpload.classList.add('has-file');
        uploadText.textContent = file.name;
        if (uploadIcon) uploadIcon.textContent = '\u2705';
        if (fileInfo) {
          const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
          fileInfo.textContent = sizeMB + ' MB';
          fileInfo.style.display = 'block';
        }
      }
    });

    // Drag and drop
    fileUpload.addEventListener('dragover', (e) => {
      e.preventDefault();
      fileUpload.style.borderColor = 'var(--accent)';
    });
    fileUpload.addEventListener('dragleave', () => {
      fileUpload.style.borderColor = '';
    });
    fileUpload.addEventListener('drop', (e) => {
      e.preventDefault();
      fileUpload.style.borderColor = '';
      const file = e.dataTransfer.files[0];
      if (file) {
        const dt = new DataTransfer();
        dt.items.add(file);
        fileInput.files = dt.files;
        fileInput.dispatchEvent(new Event('change'));
      }
    });
  }

  // Post button - simulate posting
  if (postBtn) {
    postBtn.addEventListener('click', () => {
      postBtn.classList.add('loading');
      postBtn.disabled = true;
      postBtn.textContent = '';
      setTimeout(() => {
        showState('state-success');
        postBtn.classList.remove('loading');
        postBtn.disabled = false;
        setLanguage(currentLang);
      }, 2000);
    });
  }

  // Post another
  if (postAnotherBtn) {
    postAnotherBtn.addEventListener('click', () => {
      resetForm();
      showState('state-form');
      setLanguage(currentLang);
    });
  }

  // Logout
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      resetForm();
      showState('state-login');
      setLanguage(currentLang);
    });
  }

  // Show initial state
  showState('state-login');
}

function resetForm() {
  const fileUpload = document.getElementById('file-upload-area');
  const fileInput = document.getElementById('video-file-input');
  const captionInput = document.querySelector('#state-form .form-input');
  const uploadText = fileUpload ? fileUpload.querySelector('.file-upload-text') : null;
  const fileInfo = fileUpload ? fileUpload.querySelector('.file-info') : null;
  const uploadIcon = fileUpload ? fileUpload.querySelector('.file-upload-icon') : null;

  if (fileUpload) fileUpload.classList.remove('has-file');
  if (fileInput) fileInput.value = '';
  if (captionInput) captionInput.value = '';
  if (uploadText) uploadText.textContent = translations[currentLang].videoFilePlaceholder;
  if (uploadIcon) uploadIcon.textContent = '\uD83C\uDFA5';
  if (fileInfo) fileInfo.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('publishlab-lang') || 'en';
  setLanguage(savedLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  initApp();
});
