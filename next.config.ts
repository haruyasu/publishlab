import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["closing-working-wasp.ngrok-free.app"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.tiktokcdn.com" },
      { protocol: "https", hostname: "**.tiktok.com" },
    ],
  },
};

export default nextConfig;
