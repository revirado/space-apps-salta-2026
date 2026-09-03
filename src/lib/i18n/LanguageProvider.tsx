"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import {
  dictionaries,
  LANGUAGES,
  LANG_LABELS,
  type Dictionary,
  type Language,
} from "./dictionary";

const STORAGE_KEY = "spaceapps-salta-lang";
const DEFAULT_LANGUAGE: Language = "es";

/* ------------------------------------------------------------------ */
/* External store for persisted language                               */
/* ------------------------------------------------------------------ */

const subscribers = new Set<() => void>();

function notifySubscribers() {
  subscribers.forEach((cb) => cb());
}

function subscribeLanguage(callback: () => void): () => void {
  subscribers.add(callback);
  if (typeof window !== "undefined") {
    window.addEventListener("storage", onStorage);
  }
  return () => {
    subscribers.delete(callback);
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", onStorage);
    }
  };
}

function onStorage(e: StorageEvent) {
  if (e.key === STORAGE_KEY) notifySubscribers();
}

function readClientLanguage(): Language {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  const url = new URL(window.location.href);
  const fromUrl = url.searchParams.get("lang");
  if (fromUrl === "es" || fromUrl === "en") return fromUrl;
  const fromStorage = window.localStorage.getItem(STORAGE_KEY);
  if (fromStorage === "es" || fromStorage === "en") return fromStorage;
  return DEFAULT_LANGUAGE;
}

function getServerLanguage(): Language {
  return DEFAULT_LANGUAGE;
}

/* ------------------------------------------------------------------ */
/* Context                                                            */
/* ------------------------------------------------------------------ */

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggle: () => void;
  t: Dictionary;
  labels: typeof LANG_LABELS;
  languages: typeof LANGUAGES;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Reads from URL/localStorage on the client, returns default on the server.
  const language = useSyncExternalStore(
    subscribeLanguage,
    readClientLanguage,
    getServerLanguage,
  );

  // Sync <html lang> and storage whenever language changes.
  useEffect(() => {
    const dict = dictionaries[language];
    document.documentElement.lang = dict.meta.htmlLang;
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* storage may be unavailable; safe to ignore */
    }
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.toString());
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    notifySubscribers();
  }, []);

  const toggle = useCallback(() => {
    const next = readClientLanguage() === "es" ? "en" : "es";
    setLanguage(next);
  }, [setLanguage]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggle,
      t: dictionaries[language],
      labels: LANG_LABELS,
      languages: LANGUAGES,
    }),
    [language, setLanguage, toggle],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return ctx;
}
