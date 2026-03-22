import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { initVideoPublish, uploadVideoFile } from "@/lib/tiktok";

export async function POST(request: NextRequest) {
  const session = await getSession();

  if (!session.accessToken) {
    return NextResponse.json(
      { success: false, error: "Not authenticated" },
      { status: 401 },
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, error: "No file provided" },
        { status: 400 },
      );
    }

    const fileBuffer = new Uint8Array(await file.arrayBuffer());

    const { publish_id, upload_url } = await initVideoPublish(
      session.accessToken,
      fileBuffer.length,
    );

    await uploadVideoFile(upload_url, fileBuffer);

    return NextResponse.json({ success: true, publishId: publish_id });
  } catch (err) {
    console.error("Publish error:", err);
    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Failed to publish video",
      },
      { status: 500 },
    );
  }
}
