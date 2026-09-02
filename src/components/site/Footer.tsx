"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { key: "whatIs", href: "#what-is" },
  { key: "howItWorks", href: "#how-it-works" },
  { key: "event", href: "#event" },
  { key: "faq", href: "#faq" },
] as const;

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
          {/* Brand block */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logos/space-apps-white-small.svg"
                alt=""
                className="h-9 w-auto"
              />
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

          {/* Resources */}
          <div className="lg:col-span-4">
            <h3 className="font-mono-code text-xs uppercase tracking-[0.25em] text-blue-yonder mb-4">
              {t.footer.resources}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.spaceappschallenge.org/"
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
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} NASA Space Apps Salta · {t.footer.rights}
          </p>
          <p className="text-xs text-muted-foreground/70 font-mono-code tracking-wider">
            {t.footer.madeBy}
          </p>
        </div>
      </div>
    </footer>
  );
}
