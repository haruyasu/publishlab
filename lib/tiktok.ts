const TIKTOK_AUTH_URL = "https://www.tiktok.com/v2/auth/authorize/";
const TIKTOK_TOKEN_URL = "https://open.tiktokapis.com/v2/oauth/token/";
const TIKTOK_USERINFO_URL = "https://open.tiktokapis.com/v2/user/info/";
const TIKTOK_VIDEO_LIST_URL = "https://open.tiktokapis.com/v2/video/list/";
const TIKTOK_PUBLISH_INIT_URL =
  "https://open.tiktokapis.com/v2/post/publish/inbox/video/init/";

const SCOPES = "user.info.basic,video.publish,video.upload,video.list";

function getClientKey(): string {
  const key = process.env.TIKTOK_CLIENT_KEY;
  if (!key) throw new Error("TIKTOK_CLIENT_KEY is not set");
  return key;
}

function getClientSecret(): string {
  const secret = process.env.TIKTOK_CLIENT_SECRET;
  if (!secret) throw new Error("TIKTOK_CLIENT_SECRET is not set");
  return secret;
}

function getRedirectUri(): string {
  const base = process.env.BASE_URL || "http://localhost:3000";
  return `${base}/auth/callback`;
}

export function getAuthUrl(state: string): string {
  const params = new URLSearchParams({
    client_key: getClientKey(),
    scope: SCOPES,
    response_type: "code",
    redirect_uri: getRedirectUri(),
    state,
  });
  return `${TIKTOK_AUTH_URL}?${params.toString()}`;
}

interface TokenResponse {
  access_token: string;
  refresh_token: string;
  open_id: string;
  expires_in: number;
  refresh_expires_in: number;
  token_type: string;
}

export async function exchangeCodeForToken(
  code: string,
): Promise<TokenResponse> {
  const res = await fetch(TIKTOK_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_key: getClientKey(),
      client_secret: getClientSecret(),
      code,
      grant_type: "authorization_code",
      redirect_uri: getRedirectUri(),
    }),
  });

  const data = await res.json();
  console.log("TikTok token response:", JSON.stringify(data));
  if (data.error) {
    throw new Error(
      `Token exchange failed: ${data.error_description || data.error}`,
    );
  }
  return data;
}

export async function refreshAccessToken(
  refreshToken: string,
): Promise<TokenResponse> {
  const res = await fetch(TIKTOK_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_key: getClientKey(),
      client_secret: getClientSecret(),
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  const data = await res.json();
  if (data.error) {
    throw new Error(
      `Token refresh failed: ${data.error_description || data.error}`,
    );
  }
  return data;
}

interface UserInfo {
  display_name: string;
  avatar_url: string;
}

export async function getUserInfo(accessToken: string): Promise<UserInfo> {
  const res = await fetch(
    `${TIKTOK_USERINFO_URL}?fields=display_name,avatar_url`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  );

  const data = await res.json();
  console.log("TikTok user info response:", JSON.stringify(data));

  if (data.error?.code && data.error.code !== "ok") {
    throw new Error(
      `User info failed: ${data.error.message || data.error.code}`,
    );
  }
  return data.data?.user ?? { display_name: "", avatar_url: "" };
}

export interface TikTokVideo {
  id: string;
  title: string;
  create_time: number;
  view_count: number;
  like_count: number;
  comment_count: number;
  share_url: string;
  cover_image_url: string;
}

interface VideoListResponse {
  videos: TikTokVideo[];
  cursor: number;
  has_more: boolean;
}

export async function getVideoList(
  accessToken: string,
  cursor?: number,
): Promise<VideoListResponse> {
  const body: Record<string, unknown> = { max_count: 20 };
  if (cursor) body.cursor = cursor;

  const res = await fetch(
    `${TIKTOK_VIDEO_LIST_URL}?fields=id,title,create_time,view_count,like_count,comment_count,share_url,cover_image_url`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  );

  const data = await res.json();
  console.log("TikTok video list response:", JSON.stringify(data));
  if (data.error?.code && data.error.code !== "ok") {
    throw new Error(
      `Video list failed: ${data.error.message || data.error.code}`,
    );
  }
  return data.data ?? { videos: [], cursor: 0, has_more: false };
}

interface PublishInitResponse {
  publish_id: string;
  upload_url: string;
}

const CHUNK_SIZE = 10 * 1024 * 1024; // 10MB
const SINGLE_CHUNK_MAX = 64 * 1024 * 1024; // 64MB

export async function initVideoPublish(
  accessToken: string,
  fileSize: number,
): Promise<PublishInitResponse> {
  let chunkSize: number;
  let totalChunkCount: number;

  if (fileSize <= SINGLE_CHUNK_MAX) {
    chunkSize = fileSize;
    totalChunkCount = 1;
  } else {
    chunkSize = CHUNK_SIZE;
    totalChunkCount = Math.ceil(fileSize / CHUNK_SIZE);
  }

  const body = {
    source_info: {
      source: "FILE_UPLOAD",
      video_size: fileSize,
      chunk_size: chunkSize,
      total_chunk_count: totalChunkCount,
    },
  };

  const res = await fetch(TIKTOK_PUBLISH_INIT_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  console.log("Publish init response:", JSON.stringify(data, null, 2));
  if (data.error?.code && data.error.code !== "ok") {
    throw new Error(
      `Publish init failed: ${data.error.code} - ${data.error.message || JSON.stringify(data.error)}`,
    );
  }
  return data.data;
}

export async function uploadVideoFile(
  uploadUrl: string,
  fileBuffer: Uint8Array,
): Promise<void> {
  const fileSize = fileBuffer.length;

  if (fileSize <= SINGLE_CHUNK_MAX) {
    // Single chunk upload
    const res = await fetch(uploadUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "video/mp4",
        "Content-Range": `bytes 0-${fileSize - 1}/${fileSize}`,
      },
      body: fileBuffer as unknown as BodyInit,
    });

    if (!res.ok) {
      throw new Error(`Video upload failed: ${res.status} ${res.statusText}`);
    }
  } else {
    // Chunked upload
    let offset = 0;
    while (offset < fileSize) {
      const end = Math.min(offset + CHUNK_SIZE, fileSize);
      const chunk = fileBuffer.slice(offset, end);

      const res = await fetch(uploadUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "video/mp4",
          "Content-Range": `bytes ${offset}-${end - 1}/${fileSize}`,
        },
        body: chunk as unknown as BodyInit,
      });

      if (!res.ok) {
        throw new Error(
          `Chunk upload failed at offset ${offset}: ${res.status} ${res.statusText}`,
        );
      }

      offset = end;
    }
  }
}
