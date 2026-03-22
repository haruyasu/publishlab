"use server";

import { getSession } from "@/lib/session";

export async function getAuthStatus() {
  const session = await getSession();

  if (session.accessToken) {
    return {
      loggedIn: true as const,
      displayName: session.displayName || null,
      avatarUrl: session.avatarUrl || null,
    };
  }

  return { loggedIn: false as const };
}

export async function logout() {
  const session = await getSession();
  session.destroy();
  return { success: true };
}
