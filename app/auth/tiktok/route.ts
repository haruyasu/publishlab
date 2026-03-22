import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { getAuthUrl } from "@/lib/tiktok";
import crypto from "crypto";

export async function GET() {
  const session = await getSession();
  const state = crypto.randomBytes(16).toString("hex");
  session.oauthState = state;
  await session.save();

  const authUrl = getAuthUrl(state);
  return NextResponse.redirect(authUrl);
}
