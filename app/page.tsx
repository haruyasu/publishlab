"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginState from "@/components/LoginState";
import PostForm from "@/components/PostForm";
import VideoList from "@/components/VideoList";
import SuccessState from "@/components/SuccessState";
import { getAuthStatus, logout } from "@/actions/auth";
import { Lang, t } from "@/lib/i18n";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type AppState = "login" | "post" | "videos" | "success";
type Tab = "post" | "videos";

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");
  const [appState, setAppState] = useState<AppState>("login");
  const [activeTab, setActiveTab] = useState<Tab>("post");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("publishlab-lang");
    if (saved === "ja" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("publishlab-lang", lang);
  }, [lang]);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const status = await getAuthStatus();
        if (status.loggedIn) {
          setAppState("post");
        }
      } catch {
        // Not logged in
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    await logout();
    setAppState("login");
    setActiveTab("post");
  };

  const handleTabSwitch = (tab: string) => {
    const t = tab as Tab;
    setActiveTab(t);
    setAppState(t);
  };

  const isLoggedIn =
    appState === "post" || appState === "videos" || appState === "success";

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header lang={lang} onLangChange={setLang} />
        <div className="max-w-[768px] mx-auto px-6 pt-20 text-center text-muted-foreground flex-1">
          Loading...
        </div>
        <Footer lang={lang} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lang} onLangChange={setLang} />

      <div className="w-full mx-auto px-6 py-10 flex-1 max-w-[768px]">
        {isLoggedIn && appState !== "success" && (
          <Tabs
            value={activeTab}
            onValueChange={handleTabSwitch}
            className="mb-6"
          >
            <TabsList className="w-full">
              <TabsTrigger value="post" className="flex-1">
                {t(lang, "tabPost")}
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex-1">
                {t(lang, "tabMyVideos")}
              </TabsTrigger>
            </TabsList>
          </Tabs>
        )}

        {appState === "login" && <LoginState lang={lang} />}

        {appState === "post" && (
          <PostForm
            lang={lang}
            onSuccess={() => setAppState("success")}
            onLogout={handleLogout}
          />
        )}

        {appState === "videos" && (
          <VideoList lang={lang} onLogout={handleLogout} />
        )}

        {appState === "success" && (
          <SuccessState
            lang={lang}
            onPostAnother={() => {
              setActiveTab("post");
              setAppState("post");
            }}
          />
        )}
      </div>

      <Footer lang={lang} />
    </div>
  );
}
