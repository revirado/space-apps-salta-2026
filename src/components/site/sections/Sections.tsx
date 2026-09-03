"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { SectionHeader } from "@/components/ui-custom/SectionHeader";
import { Reveal } from "@/components/ui-custom/Reveal";
import { CTAButton } from "@/components/ui-custom/CTAButton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Database,
  Globe2,
  Timer,
  Users,
  Sparkles,
  Wrench,
  Compass,
  GitBranch,
  Rocket,
  Target,
  CheckCircle2,
  Circle,
  Instagram,
  ArrowRight,
} from "lucide-react";

const REGISTRATION_URL = "https://www.spaceappschallenge.org/2026/local-events/salta/";

/* ================================================================== */
/* 01 — What is Space Apps                                            */
/* ================================================================== */

export function WhatIs() {
  const { t } = useLanguage();
  return (
    <Section
      id="what-is"
      className="bg-section-gradient"
      header={
        <SectionHeader
          eyebrow={t.whatIs.eyebrow}
          title={t.whatIs.title}
        />
      }
    >
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <Reveal className="lg:col-span-7 space-y-6">
          <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed text-pretty">
            {t.whatIs.lead}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t.whatIs.p1}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t.whatIs.p2}
          </p>
        </Reveal>

        <div className="lg:col-span-5 grid gap-4">
          {t.whatIs.pillars.map((p, i) => (
            <Reveal key={p.title} delay={0.1 * i}>
              <article className="card-glow rounded-xl p-5 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-1 w-9 h-9 rounded-lg bg-neon-blue/15 border border-neon-blue/30 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-blue-yonder" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-base mb-1">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {p.text}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ================================================================== */
/* 02 — Why Join                                                     */
/* ================================================================== */

const whyIcons = [Database, Target, Timer, Users, Globe2, Wrench];

export function WhyJoin() {
  const { t } = useLanguage();
  return (
    <Section
      id="why-join"
      className="bg-deep-blue"
      header={
        <SectionHeader
          eyebrow={t.whyJoin.eyebrow}
          title={t.whyJoin.title}
          subtitle={t.whyJoin.subtitle}
        />
      }
    >
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {t.whyJoin.items.map((item, i) => {
          const Icon = whyIcons[i % whyIcons.length];
          return (
            <Reveal as="li" key={item.title} delay={(i % 3) * 0.08} className="list-none">
              <article className="group card-glow rounded-xl p-6 h-full transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono-code text-xs text-blue-yonder/80 tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-blue/30 to-blue-yonder/10 border border-blue-yonder/30 flex items-center justify-center transition-transform group-hover:scale-110">
                    <Icon className="w-5 h-5 text-blue-yonder" />
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </article>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}

/* ================================================================== */
/* 03 — Not Just Coding                                              */
/* ================================================================== */

export function NotJustCoding() {
  const { t } = useLanguage();
  return (
    <Section
      id="not-just-coding"
      className="bg-section-gradient"
      header={
        <SectionHeader
          eyebrow={t.notJustCoding.eyebrow}
          title={t.notJustCoding.title}
          subtitle={t.notJustCoding.lead}
        />
      }
    >
      <div className="mt-8">
        <ul className="flex flex-wrap gap-2.5 sm:gap-3 justify-center max-w-4xl mx-auto">
          {t.notJustCoding.disciplines.map((d, i) => (
            <Reveal as="li" key={d} delay={(i % 5) * 0.05} className="list-none">
              <span className="inline-flex items-center rounded-full border border-blue-yonder/25 bg-white/5 hover:bg-neon-blue/15 hover:border-neon-blue/50 px-4 py-2 text-sm font-display font-semibold uppercase tracking-wider text-foreground/90 transition-colors cursor-default">
                {d}
              </span>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={0.2}>
          <p className="mt-10 text-center font-display font-bold text-xl sm:text-2xl text-balance max-w-3xl mx-auto text-gradient-blue">
            {t.notJustCoding.closing}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

/* ================================================================== */
/* 04 — How It Works                                                 */
/* ================================================================== */

const stepIcons = [Compass, GitBranch, Wrench, Rocket, Target];

export function HowItWorks() {
  const { t } = useLanguage();
  return (
    <Section
      id="how-it-works"
      className="bg-deep-blue"
      header={
        <SectionHeader
          eyebrow={t.howItWorks.eyebrow}
          title={t.howItWorks.title}
          subtitle={t.howItWorks.subtitle}
        />
      }
    >
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 relative">
        {/* connecting line (desktop) */}
        <div
          aria-hidden
          className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-blue-yonder/40 to-transparent"
        />
        {t.howItWorks.steps.map((step, i) => {
          const Icon = stepIcons[i % stepIcons.length];
          return (
            <Reveal as="li" key={step.index} delay={i * 0.1} className="list-none relative">
              <article className="group card-glow rounded-xl p-5 lg:p-6 h-full transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-code text-xs font-bold tracking-widest text-blue-yonder/80">
                    {step.index}
                  </span>
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-neon-blue/30 to-deep-blue border border-blue-yonder/40 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="w-5 h-5 text-blue-yonder" />
                  </div>
                </div>
                <h3 className="font-display font-black uppercase tracking-wide text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.text}
                </p>
              </article>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}

/* ================================================================== */
/* 05 — Global Connection                                            */
/* ================================================================== */

export function GlobalConnection() {
  const { t } = useLanguage();
  return (
    <Section
      id="global-connection"
      className="bg-section-gradient relative overflow-hidden"
      header={
        <SectionHeader
          eyebrow={t.globalConnection.eyebrow}
          title={t.globalConnection.title}
          subtitle={t.globalConnection.lead}
        />
      }
    >
      {/* Decorative global network */}
      <div className="grid lg:grid-cols-12 gap-8 items-center mt-6">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <Reveal>
            <div className="card-glow rounded-2xl p-6 lg:p-8">
              <p className="text-base sm:text-lg text-foreground/90 leading-relaxed text-pretty">
                {t.globalConnection.salta}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <Reveal>
            <GlobalNetworkGraphic />
          </Reveal>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {t.globalConnection.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <div className="card-glow rounded-xl p-6 text-center">
              <div className="font-display font-black text-4xl sm:text-5xl text-gradient-blue tracking-tight">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground font-medium">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function GlobalNetworkGraphic() {
  // Stylized world network: a dotted globe + connecting nodes.
  // Hardcoded deterministic coordinates (no random) to avoid SSR/CSR hydration mismatch.
  const nodes: { x: number; y: number; id: string; salta?: boolean }[] = [
    { x: 18, y: 32, id: "n0" },
    { x: 32, y: 22, id: "n1" },
    { x: 48, y: 18, id: "n2" },
    { x: 62, y: 24, id: "n3" },
    { x: 78, y: 30, id: "n4" },
    { x: 86, y: 42, id: "n5" },
    { x: 12, y: 44, id: "n6" },
    { x: 24, y: 50, id: "n7" },
    { x: 40, y: 38, id: "n8" },
    { x: 56, y: 44, id: "n9" },
    { x: 70, y: 50, id: "n10" },
    { x: 84, y: 56, id: "n11" },
    { x: 16, y: 58, id: "n12" },
    { x: 38, y: 60, id: "n13" },
    { x: 52, y: 62, id: "n14" },
    { x: 66, y: 64, id: "n15" },
    { x: 80, y: 68, id: "n16" },
    { x: 22, y: 70, id: "n17" },
    { x: 44, y: 76, id: "n18" },
    { x: 58, y: 78, id: "n19" },
    { x: 72, y: 76, id: "n20" },
    { x: 30, y: 36, id: "n21" },
    { x: 46, y: 28, id: "n22" },
    { x: 60, y: 36, id: "n23" },
    { x: 74, y: 42, id: "n24" },
    { x: 38, y: 48, id: "n25" },
    { x: 50, y: 52, id: "n26" },
    { x: 64, y: 56, id: "n27" },
    { x: 76, y: 48, id: "n28" },
    // Salta node
    { x: 28, y: 60, id: "salta", salta: true },
  ];

  const connections = [
    [29, 0], [29, 5], [29, 8], [29, 13], [29, 18],
  ] as const;

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto" role="img" aria-label="Stylized global network">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <radialGradient id="globe-bg" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#0960E1" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#07173F" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#07173F" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="line-grad" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#2E96F5" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#EAFE07" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2E96F5" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="42" fill="url(#globe-bg)" />
        {/* meridians */}
        {[10, 20, 30, 40].map((r) => (
          <ellipse
            key={`v${r}`}
            cx="50"
            cy="50"
            rx={r}
            ry="42"
            fill="none"
            stroke="#2E96F5"
            strokeWidth="0.25"
            opacity="0.35"
          />
        ))}
        {[10, 20, 30, 40].map((r) => (
          <ellipse
            key={`h${r}`}
            cx="50"
            cy="50"
            rx="42"
            ry={r}
            fill="none"
            stroke="#2E96F5"
            strokeWidth="0.25"
            opacity="0.35"
          />
        ))}
        {/* connections to Salta */}
        {connections.map(([from, to], idx) => {
          const a = nodes[from];
          const b = nodes[to];
          if (!a || !b) return null;
          return (
            <line
              key={`c${idx}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#line-grad)"
              strokeWidth="0.4"
              opacity="0.7"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0 100;100 0"
                dur="6s"
                repeatCount="indefinite"
                begin={`${idx * 0.7}s`}
              />
            </line>
          );
        })}
        {/* nodes */}
        {nodes.map((n) => (
          <g key={n.id}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.salta ? 1.4 : 0.6}
              fill={n.salta ? "#EAFE07" : "#9EC3F5"}
              opacity={n.salta ? 1 : 0.85}
            />
            {n.salta && (
              <circle
                cx={n.x}
                cy={n.y}
                r="3"
                fill="none"
                stroke="#EAFE07"
                strokeWidth="0.3"
                opacity="0.6"
              >
                <animate attributeName="r" values="2;5;2" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;0;0.7" dur="3s" repeatCount="indefinite" />
              </circle>
            )}
          </g>
        ))}
        <text
          x="28"
          y="68"
          fill="#EAFE07"
          fontSize="3"
          fontFamily="var(--font-fira-code)"
          textAnchor="middle"
        >
          SALTA
        </text>
      </svg>
    </div>
  );
}

// helper imported above

/* ================================================================== */
/* 06 — Salta Event                                                  */
/* ================================================================== */

export function SaltaEvent() {
  const { t } = useLanguage();
  return (
    <Section
      id="event"
      className="bg-deep-blue"
      header={
        <SectionHeader
          eyebrow={t.saltaEvent.eyebrow}
          title={t.saltaEvent.title}
          subtitle={t.saltaEvent.lead}
        />
      }
    >
      <div className="grid lg:grid-cols-2 gap-4 mt-2">
        {t.saltaEvent.details.map((d, i) => {
          const confirmed = d.status === "confirmed";
          return (
            <Reveal key={d.label} delay={(i % 2) * 0.08}>
              <article className="card-glow rounded-xl p-5 lg:p-6 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-blue-yonder/80 mb-1.5">
                    {d.label}
                  </div>
                  <div className="font-display font-bold text-lg text-foreground truncate">
                    {d.value}
                  </div>
                </div>
                <div className="shrink-0 mt-1">
                  {confirmed ? (
                    <CheckCircle2 className="w-5 h-5 text-neon-yellow" />
                  ) : (
                    <Circle className="w-5 h-5 text-muted-foreground/60" />
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

/* ================================================================== */
/* 07 — Challenges                                                   */
/* ================================================================== */

export function Challenges() {
  const { t } = useLanguage();
  return (
    <Section
      id="challenges"
      className="bg-section-gradient"
      header={
        <SectionHeader
          eyebrow={t.challenges.eyebrow}
          title={t.challenges.title}
          subtitle={t.challenges.lead}
        />
      }
    >
      <Reveal>
        <article className="card-glow rounded-2xl p-8 lg:p-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-neon-yellow/15 border border-neon-yellow/40 mb-5">
            <span className="font-mono-code text-xs font-bold tracking-widest text-neon-yellow orbit-pulse">
              SOON
            </span>
          </div>
          <div className="font-display font-black text-2xl sm:text-3xl text-foreground mb-3">
            {t.challenges.status}
          </div>
          <p className="text-muted-foreground text-pretty leading-relaxed">
            {t.challenges.note}
          </p>
        </article>
      </Reveal>
    </Section>
  );
}

/* ================================================================== */
/* 08 — People                                                       */
/* ================================================================== */

export function People() {
  const { t } = useLanguage();
  return (
    <Section
      id="people"
      className="bg-deep-blue"
      header={
        <SectionHeader
          eyebrow={t.people.eyebrow}
          title={t.people.title}
          subtitle={t.people.lead}
        />
      }
    >
      <div className="grid sm:grid-cols-3 gap-4">
        {t.people.roles.map((role, i) => (
          <Reveal key={role.title} delay={i * 0.1}>
            <article className="card-glow rounded-xl p-6 lg:p-8 h-full flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-yonder/15 to-deep-blue border border-blue-yonder/25 mb-4 flex items-center justify-center">
                <Users className="w-7 h-7 text-blue-yonder" />
              </div>
              <h3 className="font-display font-bold uppercase tracking-wider text-foreground text-lg mb-2">
                {role.title}
              </h3>
              <span className="font-mono-code text-xs uppercase tracking-widest text-muted-foreground">
                {role.status}
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ================================================================== */
/* 09 — Collaborators                                                */
/* ================================================================== */

export function Collaborators() {
  const { t } = useLanguage();
  return (
    <Section
      id="collaborators"
      className="bg-section-gradient"
      header={
        <SectionHeader
          eyebrow={t.collaborators.eyebrow}
          title={t.collaborators.title}
          subtitle={t.collaborators.lead}
        />
      }
    >
      <Reveal>
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div className="card-glow rounded-2xl p-6 lg:p-8">
            <p className="font-display font-bold text-xl text-foreground mb-3">
              {t.collaborators.status}
            </p>
            <p className="text-muted-foreground text-pretty leading-relaxed mb-5">
              {t.collaborators.lead}
            </p>
            <CTAButton
              variant="outline"
              onClick={() => {
                window.open(
                  "https://www.instagram.com/spaceapps.salta/",
                  "_blank",
                  "noopener,noreferrer",
                );
              }}
            >
              <Instagram className="w-4 h-4 mr-2 inline" />
              {t.collaborators.cta}
            </CTAButton>
          </div>
          {/* placeholder logo grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[5/3] rounded-lg border border-dashed border-white/15 bg-white/2 flex items-center justify-center"
                aria-hidden
              >
                <span className="font-mono-code text-xs text-muted-foreground/60 tracking-widest">
                  LOGO {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ================================================================== */
/* FAQ                                                              */
/* ================================================================== */

export function FAQ() {
  const { t } = useLanguage();
  return (
    <Section
      id="faq"
      className="bg-deep-blue"
      header={
        <SectionHeader
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
        />
      }
    >
      <Reveal>
        <div className="card-glow rounded-2xl p-2 sm:p-3 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-white/10 last:border-b-0"
              >
                <AccordionTrigger className="font-display font-bold text-base sm:text-lg text-foreground text-left py-5 hover:no-underline hover:text-blue-yonder px-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-pretty leading-relaxed px-4 pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Reveal>
    </Section>
  );
}

/* ================================================================== */
/* Final CTA                                                         */
/* ================================================================== */

export function FinalCTA() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section
      id="final-cta"
      ref={ref}
      className="relative isolate overflow-hidden bg-deep-blue py-24 lg:py-32"
    >
      {/* Background mini orbital motif */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 grid-bg grid-bg-fade opacity-25"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-hero-gradient opacity-90"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden"
      >
        {[220, 300, 380].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-blue-yonder/20 orbit-pulse"
            style={{
              width: size,
              height: size,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.6 }}
          className="font-mono-code text-xs uppercase tracking-[0.3em] text-blue-yonder mb-4 inline-flex items-center gap-3"
        >
          <span className="inline-block h-px w-8 bg-blue-yonder/70" />
          {t.finalCta.eyebrow}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
          className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-balance leading-[1.05] text-white"
        >
          {t.finalCta.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          className="mt-5 text-base sm:text-lg text-foreground/85 text-pretty max-w-2xl mx-auto"
        >
          {t.finalCta.text}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
          className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <CTAButton
            variant="accent"
            glow
            onClick={() =>
              window.open(REGISTRATION_URL, "_blank", "noopener,noreferrer")
            }
          >
            {t.finalCta.primary}
            <ArrowRight className="w-4 h-4 ml-2 inline" />
          </CTAButton>
          <CTAButton
            variant="outline"
            onClick={() =>
              window.open(
                "https://www.instagram.com/spaceapps.salta/",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            <Instagram className="w-4 h-4 mr-2 inline" />
            {t.finalCta.secondary}
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================== */
/* Generic Section wrapper                                           */
/* ================================================================== */

export function Section({
  id,
  className,
  header,
  children,
}: {
  id?: string;
  className?: string;
  header?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative py-20 lg:py-28 ${className ?? ""}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {header && <div className="mb-10 lg:mb-14">{header}</div>}
        {children}
      </div>
    </section>
  );
}
