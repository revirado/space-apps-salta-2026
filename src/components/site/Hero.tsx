"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { OrbitalField } from "@/components/three/OrbitalField";
import { CTAButton } from "@/components/ui-custom/CTAButton";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const REGISTRATION_URL = "https://www.spaceappschallenge.org/2026/local-events/salta/";

export function Hero() {
  const { t } = useLanguage();

  const titleLines = t.hero.title.split("\n");

  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden isolate"
    >
      {/* Three.js background layer */}
      <div className="absolute inset-0 z-0">
        <OrbitalField className="absolute inset-0" />
      </div>

      {/* Gradient wash on top of canvas to keep readability */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-hero-gradient opacity-95" />

      {/* Grid overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none grid-bg grid-bg-fade opacity-30" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[100svh] flex flex-col justify-center pt-24 pb-24">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-3 font-mono-code text-[11px] sm:text-xs uppercase tracking-[0.3em] text-blue-yonder/95"
          >
            <span className="inline-block h-px w-10 bg-blue-yonder/70" aria-hidden />
            <span>{t.hero.eyebrow}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            className="mt-5 font-display font-black tracking-tight leading-[0.92] text-balance text-white"
          >
            {titleLines.map((line, i) => (
              <span
                key={i}
                className={
                  i === titleLines.length - 1
                    ? "block text-gradient-blue text-5xl sm:text-7xl lg:text-8xl xl:text-9xl"
                    : "block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl"
                }
              >
                {line}
              </span>
            ))}
          </motion.h1>

          {/* Date chip */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
            className="mt-6 inline-flex items-center gap-3 rounded-full border border-neon-yellow/40 bg-neon-yellow/10 px-4 py-2"
          >
            <span className="font-mono-code text-xs sm:text-sm font-bold tracking-widest text-neon-yellow">
              {t.hero.dateLine}
            </span>
            <span className="text-foreground/60">·</span>
            <span className="text-xs sm:text-sm text-foreground/85 font-medium">
              {t.hero.locationLine}
            </span>
          </motion.div>

          {/* Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.26 }}
            className="mt-6 max-w-2xl text-lg sm:text-xl text-foreground/85 text-pretty leading-relaxed"
          >
            {t.hero.proposition}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.34 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <CTAButton
              variant="primary"
              glow
              onClick={() =>
                window.open(REGISTRATION_URL, "_blank", "noopener,noreferrer")
              }
            >
              {t.hero.cta}
            </CTAButton>
            <CTAButton
              variant="outline"
              onClick={() =>
                document
                  .getElementById("what-is")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t.hero.secondary}
            </CTAButton>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.button
          type="button"
          onClick={() =>
            document
              .getElementById("what-is")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-foreground/55 hover:text-foreground/90 transition-colors"
          aria-label={t.hero.scroll}
        >
          <span className="font-mono-code text-[10px] uppercase tracking-[0.3em]">
            {t.hero.scroll}
          </span>
          <span className="relative block w-6 h-10 rounded-full border border-foreground/40 scroll-cue">
            <ArrowDown className="sr-only" />
          </span>
        </motion.button>
      </div>
    </section>
  );
}
