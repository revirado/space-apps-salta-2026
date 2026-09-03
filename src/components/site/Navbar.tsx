"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { CTAButton } from "@/components/ui-custom/CTAButton";
import { cn } from "@/lib/utils";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { key: "whatIs", href: "#what-is" },
  { key: "howItWorks", href: "#how-it-works" },
  { key: "event", href: "#event" },
  { key: "faq", href: "#faq" },
] as const;

const REGISTRATION_URL = "https://www.spaceappschallenge.org/2026/local-events/salta/";

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

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const goToRegistration = () => {
    window.open(REGISTRATION_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        // Always blurred/solid so the mobile menu is readable even at top.
        scrolled
          ? "bg-deep-blue/85 backdrop-blur-md border-b border-white/10"
          : "bg-deep-blue/55 backdrop-blur-sm border-b border-white/5",
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
              onClick={goToRegistration}
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

        {/* Mobile menu — animated */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.28, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.18, ease: "easeOut" },
              }}
              className="lg:hidden overflow-hidden"
            >
              <ul className="flex flex-col gap-1 pt-2 pb-4 border-t border-white/10 mt-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.key}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-3 rounded-md text-base font-medium text-foreground/85 hover:bg-white/5 transition-colors"
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
                      goToRegistration();
                    }}
                  >
                    {t.nav.join}
                  </CTAButton>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
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
      <Globe
        className="w-3.5 h-3.5 ml-2.5 mr-1 text-blue-yonder/80"
        aria-hidden
      />
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
