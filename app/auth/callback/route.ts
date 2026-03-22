import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { exchangeCodeForToken, getUserInfo } from "@/lib/tiktok";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const error = searchParams.get("error");

  const baseUrl = process.env.BASE_URL || "http://localhost:3000";

  if (error) {
    console.error(
      "OAuth error:",
      error,
      searchParams.get("error_description")
    );
    return NextResponse.redirect(`${baseUrl}/?error=oauth_denied`);
  }

  if (!code || !state) {
    return NextResponse.redirect(`${baseUrl}/?error=missing_params`);
  }

  const session = await getSession();

  if (session.oauthState !== state) {
    return NextResponse.redirect(`${baseUrl}/?error=invalid_state`);
  }

  try {
    const tokenData = await exchangeCodeForToken(code);
    const userInfo = await getUserInfo(tokenData.access_token);

    session.accessToken = tokenData.access_token;
    session.refreshToken = tokenData.refresh_token;
    session.openId = tokenData.open_id;
    session.displayName = userInfo.display_name;
    session.avatarUrl = userInfo.avatar_url;
    session.oauthState = undefined;
    await session.save();

    return NextResponse.redirect(`${baseUrl}/`);
  } catch (err) {
    console.error("OAuth callback error:", err);
    return NextResponse.redirect(`${baseUrl}/?error=auth_failed`);
  }
}
