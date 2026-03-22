import { getIronSession, IronSession } from "iron-session";
import { cookies } from "next/headers";

export interface SessionData {
  accessToken?: string;
  refreshToken?: string;
  openId?: string;
  displayName?: string;
  avatarUrl?: string;
  oauthState?: string;
}

const sessionOptions = {
  password:
    process.env.SESSION_SECRET ||
    "fallback-secret-change-me-in-production-32chars",
  cookieName: "publishlab_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax" as const,
    maxAge: 60 * 60 * 24,
  },
};

export async function getSession(): Promise<IronSession<SessionData>> {
  const cookieStore = await cookies();
  return getIronSession<SessionData>(cookieStore, sessionOptions);
}
