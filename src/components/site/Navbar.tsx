"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { CTAButton } from "@/components/ui-custom/CTAButton";
import { cn } from "@/lib/utils";
import { Menu, X, Globe } from "lucide-react";

const NAV_LINKS = [
  { key: "whatIs", href: "#what-is" },
  { key: "howItWorks", href: "#how-it-works" },
  { key: "event", href: "#event" },
  { key: "faq", href: "#faq" },
] as const;

export function Navbar() {
  const { t, language, setLanguage, labels, languages } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-deep-blue/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
          {/* Brand */}
          <a
            href="#top"
            className="flex items-center gap-3 group shrink-0"
            aria-label={t.nav.brand}
          >
            <img
              src="/logos/space-apps-white-small.svg"
              alt=""
              className="h-8 lg:h-9 w-auto"
            />
            <span className="hidden sm:flex flex-col leading-none font-display font-bold uppercase tracking-wider text-sm text-foreground/90">
              <span>Space Apps</span>
              <span className="text-blue-yonder text-xs tracking-[0.3em]">SALTA · 2026</span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  className="px-4 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-white/5 transition-colors"
                >
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
          </ul>

          {/* Right cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher
              languages={languages}
              labels={labels}
              current={language}
              onChange={setLanguage}
            />
            <CTAButton
              variant="accent"
              className="hidden sm:inline-flex"
              size="sm"
              onClick={() => {
                const el = document.getElementById("final-cta");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t.nav.join}
            </CTAButton>
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-foreground/80 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-yonder"
              aria-label={t.nav.openMenu}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            id="mobile-menu"
            className="lg:hidden pb-4 pt-2 border-t border-white/10 mt-1"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 rounded-md text-base font-medium text-foreground/85 hover:bg-white/5"
                  >
                    {t.nav[link.key]}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <CTAButton
                  variant="accent"
                  className="w-full"
                  onClick={() => {
                    setOpen(false);
                    document
                      .getElementById("final-cta")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {t.nav.join}
                </CTAButton>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

function LanguageSwitcher({
  languages,
  labels,
  current,
  onChange,
}: {
  languages: ("es" | "en")[];
  labels: Record<"es" | "en", string>;
  current: "es" | "en";
  onChange: (lang: "es" | "en") => void;
}) {
  return (
    <div
      role="group"
      aria-label="Language switcher"
      className="inline-flex items-center rounded-md border border-white/15 bg-white/5 overflow-hidden"
    >
      <Globe className="w-3.5 h-3.5 ml-2.5 text-blue-yonder/80" aria-hidden />
      {languages.map((lng) => (
        <button
          key={lng}
          type="button"
          onClick={() => onChange(lng)}
          aria-pressed={current === lng}
          className={cn(
            "px-2.5 py-1.5 text-xs font-mono-code font-bold tracking-wider transition-colors",
            current === lng
              ? "bg-neon-blue text-white"
              : "text-foreground/70 hover:text-foreground hover:bg-white/5",
          )}
        >
          {labels[lng]}
        </button>
      ))}
    </div>
  );
}
