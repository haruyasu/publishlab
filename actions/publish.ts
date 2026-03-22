"use server";

import { getSession } from "@/lib/session";
import { initVideoPublish, uploadVideoFile } from "@/lib/tiktok";

interface PublishResult {
  success: boolean;
  publishId?: string;
  error?: string;
}

export async function publishVideo(formData: FormData): Promise<PublishResult> {
  const session = await getSession();

  if (!session.accessToken) {
    return { success: false, error: "Not authenticated" };
  }

  const file = formData.get("file") as File | null;
  if (!file) {
    return { success: false, error: "No file provided" };
  }

  try {
    const fileBuffer = new Uint8Array(await file.arrayBuffer());

    const { publish_id, upload_url } = await initVideoPublish(
      session.accessToken,
      fileBuffer.length,
    );

    await uploadVideoFile(upload_url, fileBuffer);

    return { success: true, publishId: publish_id };
  } catch (err) {
    console.error("Publish error:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to publish video",
    };
  }
}
