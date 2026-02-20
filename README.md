# publishlab

TikTok Video Publisher - TikTokの公式APIを使用して動画を投稿するWebアプリケーション

**URL:** https://publishlab.jp/

---

# TikTok Production API 申請内容

## Basic information

### App icon
- 1024px x 1024px のアプリアイコンを用意する（グラデーションの「P」ロゴ）
- JPEG/PNG形式、5MB以下

### App name
```
publishlab
```

### Category
```
Social Media
```

### Description（120文字以内）
```
A web app to upload and publish videos directly to TikTok with secure OAuth 2.0 authentication via the official API.
```

### Terms of Service URL
```
https://publishlab.jp/terms.html
```

### Privacy Policy URL
```
https://publishlab.jp/privacy.html
```

### Platforms
```
Web
```

---

## Products（追加するプロダクト）

| Product | 必要 |
|---------|------|
| Login Kit | Yes |
| Content Posting API | Yes |

---

## Scopes（追加するスコープ）

| Scope | 説明 |
|-------|------|
| user.info.basic | ユーザーの基本情報取得（ログイン用） |
| video.publish | 動画の投稿 |
| video.upload | 動画のアップロード |

---

## App Review

### Explain how each product and scope works within your app（1000文字以内）

```
publishlab is a web application that enables users to upload and publish videos directly to their TikTok accounts.

Login Kit (user.info.basic scope):
Users authenticate via TikTok's OAuth 2.0 flow by clicking "Continue with TikTok" on our website. After authorization, we receive an access token and Open ID to maintain the session. We do not store passwords or personal data beyond what is needed for authentication.

Content Posting API (video.upload, video.publish scopes):
Once authenticated, users can:
1. Select a video file from their device (MP4, MOV, WebM)
2. Add a caption with hashtags
3. Set privacy level (Public, Friends, Only Me)
4. Mark content as AI-generated if applicable
5. Publish the video to their TikTok account

Flow: Login → Upload Video → Set Caption & Privacy → Publish to TikTok.

Video files are temporarily stored during upload and automatically deleted after posting. Users can disconnect their TikTok account at any time.

Website: https://publishlab.jp/
```

### Demo Video（撮影手順）

デモ動画では以下のフローをすべて見せる必要があります：

1. **ブラウザでサイトを開く**
   - URL `https://publishlab.jp/` が見えるようにする
   - ランディングページ全体をスクロールして見せる

2. **TikTokログイン**
   - 「Continue with TikTok」ボタンをクリック
   - TikTokのOAuth認証画面（sandbox環境）を見せる
   - 認証完了後、サイトに戻って「Connected to TikTok」表示を見せる

3. **動画アップロード**
   - 動画ファイルを選択（ドラッグ&ドロップまたはクリック）
   - ファイル名が表示されることを見せる

4. **投稿設定**
   - キャプションを入力
   - プライバシー設定を選択（Only Me）
   - AI-generated contentチェックボックスを確認

5. **投稿実行**
   - 「Post to TikTok」ボタンをクリック
   - ローディング状態を見せる
   - 投稿成功画面を見せる

6. **フッターリンク確認**
   - Terms of Service リンクをクリックして利用規約ページを見せる
   - Privacy Policy リンクをクリックしてプライバシーポリシーページを見せる

**重要なポイント：**
- ブラウザのURLバーが常に見えるようにする（ドメインの一致確認のため）
- sandbox環境でのOAuth認証を実際に実行する
- すべての選択したProducts/Scopesの機能をデモで見せる
- UIとユーザーインタラクションが明確に見えるようにする

### 動画フォーマット
- 形式: MP4 or MOV
- 最大5ファイル、各50MB以下

