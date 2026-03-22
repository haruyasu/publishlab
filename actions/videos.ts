"use server";

import { getSession } from "@/lib/session";
import { getVideoList, type TikTokVideo } from "@/lib/tiktok";

interface VideosResult {
  videos: TikTokVideo[];
  error?: string;
}

export async function fetchVideos(cursor?: number): Promise<VideosResult> {
  const session = await getSession();

  if (!session.accessToken) {
    return { videos: [], error: "Not authenticated" };
  }

  try {
    const data = await getVideoList(session.accessToken, cursor);
    return { videos: data.videos || [] };
  } catch (err) {
    console.error("Video list error:", err);
    return {
      videos: [],
      error: err instanceof Error ? err.message : "Failed to fetch videos",
    };
  }
}
