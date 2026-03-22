"use client";

import { useState, useRef, DragEvent } from "react";
import { Upload, Check, Loader2, LogOut } from "lucide-react";
import { Lang, t } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PostFormProps {
  lang: Lang;
  onSuccess: () => void;
  onLogout: () => void;
}

export default function PostForm({ lang, onSuccess, onLogout }: PostFormProps) {
  const [file, setFile] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [privacy, setPrivacy] = useState("SELF_ONLY");
  const [aiGenerated, setAiGenerated] = useState(true);
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (selectedFile: File | null) => {
    if (selectedFile) {
      setFile(selectedFile);
      setError("");
    }
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFileChange(droppedFile);
      if (fileInputRef.current) {
        const dt = new DataTransfer();
        dt.items.add(droppedFile);
        fileInputRef.current.files = dt.files;
      }
    }
  };

  const handlePost = async () => {
    if (!file) return;
    setPosting(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("caption", caption);
      formData.append("privacy", privacy);
      formData.append("aiGenerated", String(aiGenerated));

      const res = await fetch("/api/publish", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();

      if (!result.success) {
        throw new Error(result.error || "Failed to publish");
      }

      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to publish video");
    } finally {
      setPosting(false);
    }
  };

  const fileSizeMB = file ? (file.size / (1024 * 1024)).toFixed(1) : null;

  return (
    <div className="space-y-4 w-full">
      <Card>
        <CardContent className="flex items-center justify-center gap-2 py-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-sm text-foreground">
            {t(lang, "statusConnected")}
          </span>
        </CardContent>
      </Card>

      <div className="space-y-2">
        <Label>{t(lang, "videoFileLabel")}</Label>
        <div
          className={`relative border-2 border-dashed rounded p-8 text-center cursor-pointer transition-colors ${
            file
              ? "border-emerald-500 bg-emerald-500/5"
              : "border-border hover:border-muted-foreground"
          }`}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center gap-2">
            {file ? (
              <Check className="w-6 h-6 text-emerald-500" />
            ) : (
              <Upload className="w-6 h-6 text-foreground" />
            )}
            <p className="text-sm text-foreground">
              {file ? file.name : t(lang, "videoFilePlaceholder")}
            </p>
            {fileSizeMB && (
              <p className="text-xs text-foreground">{fileSizeMB} MB</p>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="video/mp4,video/quicktime,video/webm,.mp4,.mov,.webm"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>{t(lang, "captionLabel")}</Label>
        <Input
          placeholder={t(lang, "captionPlaceholder")}
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label>{t(lang, "privacyLabel")}</Label>
        <Select value={privacy} onValueChange={setPrivacy}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="SELF_ONLY">{t(lang, "privacySelf")}</SelectItem>
            <SelectItem value="MUTUAL_FOLLOW_FRIENDS">
              {t(lang, "privacyFriends")}
            </SelectItem>
            <SelectItem value="PUBLIC_TO_EVERYONE">
              {t(lang, "privacyPublic")}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          id="ai-content"
          checked={aiGenerated}
          onCheckedChange={(checked) => setAiGenerated(checked === true)}
        />
        <Label
          htmlFor="ai-content"
          className="text-sm font-normal cursor-pointer"
        >
          {t(lang, "aiContent")}
        </Label>
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <Button
        className="w-full h-11"
        onClick={handlePost}
        disabled={!file || posting}
      >
        {posting ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          t(lang, "postButton")
        )}
      </Button>

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
