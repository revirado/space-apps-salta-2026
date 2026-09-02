import type { Metadata } from "next";
import { Fira_Sans, Overpass, Fira_Code } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const overpass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spaceapps-salta.dev"),
  title: {
    default: "NASA Space Apps Salta 2026 | NASA Space Apps Challenge",
    template: "%s | NASA Space Apps Salta 2026",
  },
  description:
    "NASA Space Apps llega a Salta el 14 y 15 de noviembre de 2026. Sumate al hackathon global y construí soluciones con datos abiertos de NASA.",
  keywords: [
    "NASA Space Apps",
    "Space Apps Salta",
    "hackathon",
    "NASA",
    "open data",
    "Salta",
    "Argentina",
    "2026",
  ],
  authors: [{ name: "NASA Space Apps Salta" }],
  alternates: {
    languages: {
      "es-AR": "/",
      "en-US": "/?lang=en",
    },
  },
  openGraph: {
    title: "NASA Space Apps Salta 2026",
    description:
      "El hackathon global de NASA llega a Salta. 14 y 15 de noviembre de 2026. Sumate al desafío.",
    siteName: "NASA Space Apps Salta 2026",
    type: "website",
    locale: "es_AR",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/logos/space-apps-color-white.svg",
        width: 561,
        height: 221,
        alt: "NASA Space Apps Salta 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NASA Space Apps Salta 2026",
    description:
      "El hackathon global de NASA llega a Salta. 14 y 15 de noviembre de 2026. Sumate al desafío.",
  },
  icons: {
    icon: "/logos/space-apps-white-small.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <body
        className={`${firaSans.variable} ${overpass.variable} ${firaCode.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
