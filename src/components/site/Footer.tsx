"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ArrowUpRight, Instagram, Mail, UserCircle2 } from "lucide-react";

const NAV_LINKS = [
  { key: "whatIs", href: "#what-is" },
  { key: "howItWorks", href: "#how-it-works" },
  { key: "event", href: "#event" },
  { key: "faq", href: "#faq" },
] as const;

const REGISTRATION_URL = "https://www.spaceappschallenge.org/2026/local-events/salta/";
const INSTAGRAM_URL = "https://www.instagram.com/spaceapps.salta/";
const CONTACT_EMAIL = "ariellamas.tech@gmail.com";
const LOCAL_LEAD = "Ariel Lamas";
const POWERED_BY = "powered by ariellamas.tech";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="relative mt-auto bg-deep-blue border-t border-white/10"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand block — uses the official horizontal logo */}
          <div className="lg:col-span-5">
            <div className="mb-5">
              <img
                src="/logos/space-apps-color-white.svg"
                alt="NASA Space Apps Challenge"
                className="h-12 sm:h-14 w-auto"
              />
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="font-display font-bold uppercase tracking-wider">
                <div className="text-foreground">Space Apps</div>
                <div className="text-blue-yonder text-xs tracking-[0.3em]">
                  SALTA · 2026
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-pretty leading-relaxed max-w-md mb-5">
              {t.footer.description}
            </p>
            <p className="text-xs text-muted-foreground/80 italic">
              {t.footer.disclaimer}
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h3 className="font-mono-code text-xs uppercase tracking-[0.25em] text-blue-yonder mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {t.nav[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + Connect */}
          <div className="lg:col-span-4">
            <h3 className="font-mono-code text-xs uppercase tracking-[0.25em] text-blue-yonder mb-4">
              {t.footer.resources}
            </h3>
            <ul className="space-y-2.5 mb-6">
              <li>
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  {t.footer.nasaSpaceApps}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.spaceappschallenge.org/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  {t.footer.hackathon}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.spaceappschallenge.org/resources/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  {t.footer.openData}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>

            <h3 className="font-mono-code text-xs uppercase tracking-[0.25em] text-blue-yonder mb-3">
              {t.footer.connect}
            </h3>
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @spaceapps.salta"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 hover:bg-white/10 hover:border-blue-yonder/40 px-3 py-2 text-sm text-foreground/85 transition-colors"
              >
                <Instagram className="w-4 h-4 text-blue-yonder" />
                <span className="font-mono-code text-xs tracking-wider">
                  @spaceapps.salta
                </span>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label={`Email ${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 hover:bg-white/10 hover:border-blue-yonder/40 px-3 py-2 text-sm text-foreground/85 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-yonder" />
                <span className="font-mono-code text-xs tracking-wider">
                  {CONTACT_EMAIL}
                </span>
              </a>
            </div>

            {/* Local Lead */}
            <div className="mt-5 flex items-center gap-3 rounded-md border border-white/10 bg-white/3 px-3 py-2.5">
              <UserCircle2 className="w-5 h-5 text-blue-yonder shrink-0" />
              <div className="min-w-0">
                <div className="font-mono-code text-[10px] uppercase tracking-[0.25em] text-blue-yonder/80">
                  Local Lead
                </div>
                <div className="font-display font-bold text-sm text-foreground truncate">
                  {LOCAL_LEAD}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip — includes the circular motif logo as a visual seal */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="/logos/space-apps-motif.svg"
              alt=""
              className="h-10 w-10 opacity-90"
              aria-hidden
            />
            <p className="text-xs text-muted-foreground/70">
              © {new Date().getFullYear()} NASA Space Apps Salta · {t.footer.rights}
            </p>
          </div>
          <a
            href="https://www.ariellamas.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground/70 font-mono-code tracking-wider hover:text-foreground transition-colors"
          >
            {POWERED_BY}
          </a>
        </div>
      </div>
    </footer>
  );
}

