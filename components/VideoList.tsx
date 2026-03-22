"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Eye, Heart, MessageCircle, LogOut } from "lucide-react";
import { Lang, t } from "@/lib/i18n";
import { fetchVideos } from "@/actions/videos";
import { Card, CardContent } from "@/components/ui/card";
import type { TikTokVideo } from "@/lib/tiktok";

interface VideoListProps {
  lang: Lang;
  onLogout: () => void;
}

export default function VideoList({ lang, onLogout }: VideoListProps) {
  const [videos, setVideos] = useState<TikTokVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      const result = await fetchVideos();
      if (result.error) {
        setError(result.error);
      } else {
        setVideos(result.videos);
      }
      setLoading(false);
    };
    load();
  }, []);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString();
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="flex items-center justify-center gap-2 py-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-sm text-foreground">
            {t(lang, "statusConnected")}
          </span>
        </CardContent>
      </Card>

      {loading && (
        <p className="text-center text-foreground py-8">Loading...</p>
      )}

      {error && (
        <p className="text-center text-sm text-destructive py-4">{error}</p>
      )}

      {!loading && !error && videos.length === 0 && (
        <p className="text-center text-foreground py-8 text-sm">
          {t(lang, "noVideosYet")}
        </p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {videos.map((video) => (
          <Card key={video.id} className="overflow-hidden">
            {video.cover_image_url ? (
              <div className="relative aspect-[9/16]">
                <Image
                  src={video.cover_image_url}
                  alt={video.title || "Video thumbnail"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
            ) : (
              <div className="aspect-[9/16] bg-muted flex items-center justify-center">
                <span className="text-foreground text-xs">No thumbnail</span>
              </div>
            )}
            <CardContent className="p-3 space-y-1.5">
              <p className="text-sm font-medium line-clamp-2 leading-tight">
                {video.title || "Untitled"}
              </p>
              <p className="text-xs text-foreground">
                {formatDate(video.create_time)}
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="flex items-center gap-1 text-xs text-foreground">
                  <Eye className="w-3 h-3" />
                  {(video.view_count ?? 0).toLocaleString()}
                </span>
                <span className="flex items-center gap-1 text-xs text-foreground">
                  <Heart className="w-3 h-3" />
                  {(video.like_count ?? 0).toLocaleString()}
                </span>
                <span className="flex items-center gap-1 text-xs text-foreground">
                  <MessageCircle className="w-3 h-3" />
                  {(video.comment_count ?? 0).toLocaleString()}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={onLogout}
          className="inline-flex items-center gap-1.5 text-xs text-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <LogOut className="w-3 h-3" />
          {t(lang, "logoutButton")}
        </button>
      </div>
    </div>
  );
}
