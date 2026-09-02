# Worklog — NASA Space Apps Salta 2026 Landing

---
Task ID: 1
Agent: main (super-z)
Task: Construir la landing page de NASA Space Apps Salta 2026 en Next.js + TypeScript, con i18n ES/EN, Three.js Orbital Field, diseño responsive y accesible según el brief V1.

Work Log:
- Leído el brief completo en /home/z/my-project/upload/NASA_Space_Apps_Salta_Landing_Brief_V1.md (20 secciones, principios creativos, paleta, tipografía, arquitectura).
- Clasificado el task como **Type 3 (Interactive Web Development)**: landing interactiva Next.js con Three.js.
- Inicializado el entorno fullstack con `curl https://z-cdn.chatglm.cn/fullstack/init-fullstack.sh | bash` — Next.js 16 + TypeScript + Tailwind 4 + shadcn/ui ya disponibles.
- Copiado los 6 assets oficiales de logo a `/home/z/my-project/public/logos/`:
  - space-apps-color-white.svg (default logo)
  - space-apps-motif.svg (motif logo)
  - space-apps-black-small.svg/png
  - space-apps-white-small.svg/png
- Instalado three@0.185.1, @react-three/fiber@9.7.0, @react-three/drei@10.7.8.
- Diseñado el design system en `src/app/globals.css`:
  - Tokens de color oficiales: Deep Blue #07173F, Electric Blue #0042A6, Neon Blue #0960E1, Blue Yonder #2E96F5, Neon Yellow #EAFE07, Rocket Red #E43700, Martian Red #8E1100, White.
  - Mapeo semántico a Tailwind (`--color-primary`, `--color-background`, etc.).
  - Utility classes: `bg-hero-gradient`, `bg-section-gradient`, `text-gradient-blue`, `card-glow`, `grid-bg`, `scroll-cue`, `orbit-pulse`, `reveal-in`.
  - `prefers-reduced-motion` global override que desactiva animaciones y reveal transitions.
- Actualizado `src/app/layout.tsx` con las fuentes oficiales vía next/font/google: Fira Sans (display), Overpass (body), Fira Code (mono). Metadata SEO completa con `alternates.languages` es-AR/en-US, Open Graph, Twitter card, robots.
- Creado el sistema i18n en `src/lib/i18n/`:
  - `dictionary.ts`: tipado Dictionary completo + diccionarios `es` (Argentina) y `en` (US) con TODOS los textos visibles (nav, hero, 10 secciones, FAQ con 6 preguntas, footer).
  - `LanguageProvider.tsx`: usa `useSyncExternalStore` para leer el idioma desde URL (`?lang=es|en`) + localStorage, con suscripción al evento `storage`. Sincroniza `document.documentElement.lang` al cambiar. Patrón React 19 correcto (sin setState-in-effect).
- Componentes UI reutilizables en `src/components/ui-custom/`:
  - `CTAButton.tsx`: variantes primary/accent/ghost/outline, glow opcional, focus ring accesible.
  - `SectionHeader.tsx`: eyebrow + title + subtitle con animación framer-motion + useInView.
  - `Reveal.tsx`: wrapper de reveal-on-scroll.
- `src/components/three/OrbitalField.tsx` (Three.js Orbital Data Field):
  - Canvas con @react-three/fiber. Scene mínima: ambientLight + ParticleField + 3 Orbit (radio 4.2/5.6/7.0, tilt y yaw distintos, period 32/42/52s) con nodos viajando sobre cada órbita.
  - Particles con BufferGeometry + Points (180/280/420 según viewport: mobile/tablet/desktop).
  - CameraController: parallax de mouse suave (±2-4°, lerp) + reacción al scroll (zoom 14→10, ligero descenso).
  - `useSyncExternalStore` para `prefers-reduced-motion` (suscripción real al MQ change).
  - Fallback CSS: si WebGL no disponible, renderiza gradient + grid + 3 órbitas SVG estáticas.
  - Cleanup correcto de listeners (resize, scroll, MQ).
- `src/components/site/Navbar.tsx`: sticky, transparente → blur al hacer scroll, logo + brand name + 4 nav links + LanguageSwitcher (ES/EN con aria-pressed) + CTA "Sumate" + menú mobile accesible.
- `src/components/site/Hero.tsx`: min-h-100svh, canvas Three.js (z-0) → gradient wash (z-10) → grid overlay (z-10) → content (z-20). Eyebrow mono + H1 gigante con la última línea en text-gradient-blue + chip de fecha + proposition + 2 CTAs + scroll cue animado.
- `src/components/site/sections/Sections.tsx`: 10 secciones + Final CTA, todas con SectionHeader + Reveal:
  - WhatIs (con 3 pillars cards)
  - WhyJoin (grid 6 cards con iconos Lucide: Database, Target, Timer, Users, Globe2, Wrench)
  - NotJustCoding (10 disciplinas en pills flex-wrap + closing en gradient)
  - HowItWorks (5 steps en grid con connecting line en desktop)
  - GlobalConnection (GlobalNetworkGraphic: SVG determinista con globe + meridians + 30 nodos + 5 conexiones animadas a Salta + 3 stats)
  - SaltaEvent (5 detail cards con status confirmed/tba)
  - Challenges (placeholder Coming soon con pulsing SOON badge)
  - People (3 cards Judges/Mentors/Speakers con Coming soon)
  - Collaborators (texto + mailto CTA + grid de 6 placeholders de logo)
  - FAQ (Accordion shadcn/ui con 6 preguntas)
  - FinalCTA (hero final con mini orbital motif, gradient bg, 2 CTAs)
- `src/components/site/Footer.tsx`: 3 columnas (brand + nav + recursos con links externos a spaceappschallenge.org) + bottom strip con copyright + madeBy.
- `src/app/page.tsx`: composición final con `min-h-screen flex flex-col bg-deep-blue` para sticky footer.
- `next.config.ts`: agregado `allowedDevOrigins: ["*.space-z.ai"]` para eliminar warning cross-origin.
- Fix hydration mismatch en GlobalNetworkGraphic: reemplazados nodos aleatorios (Math.sin seed) por coordenadas hardcodeadas deterministas.
- Refactor `LanguageProvider` y `OrbitalField` para pasar el lint rule `react-hooks/set-state-in-effect` usando `useSyncExternalStore` (suscripción real para reduced-motion y lang) y `eslint-disable-next-line` con justificación para detección WebGL one-time.

Stage Summary:
- ESLint: **0 errores, 0 warnings** (`bun run lint` limpio).
- Dev server: corriendo en http://localhost:3000, **0 errores de consola, 0 errores de página**.
- Agent Browser verification:
  - Página renderiza con title "NASA Space Apps Salta 2026 | NASA Space Apps Challenge".
  - Todos los textos en español por defecto (es-AR). `<html lang="es-AR">`.
  - Language switcher EN: cambia a inglés en el momento, `<html lang="en-US">`, persiste en localStorage y URL.
  - Nav link "Evento" hace smooth-scroll preciso al `#event` section (eventTop ≈ 0.375).
  - FAQ accordion expande/colapsa correctamente.
  - VLM (vision) verificó desktop hero: "modern, clean, professional", título "NASA SPACE APPS SALTA" prominente, fecha visible en pill, partículas Three.js sutiles en background, sin overflow.
  - VLM verificó mobile hero (390x844): "layout responsive and clean", título readable, CTAs touch-friendly, sin cut-off.
  - Sticky footer: body 9839px, footer presente, layout `min-h-screen flex flex-col` funciona.
- Artefactos producidos:
  - Código: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`, `src/lib/i18n/dictionary.ts`, `src/lib/i18n/LanguageProvider.tsx`, `src/components/three/OrbitalField.tsx`, `src/components/ui-custom/CTAButton.tsx`, `src/components/ui-custom/SectionHeader.tsx`, `src/components/ui-custom/Reveal.tsx`, `src/components/site/Navbar.tsx`, `src/components/site/Hero.tsx`, `src/components/site/sections/Sections.tsx`, `src/components/site/Footer.tsx`, `next.config.ts`.
  - Assets: `public/logos/*` (6 logos oficiales).
  - Screenshots: `download/preview-desktop-hero.png`, `download/preview-desktop-full.png`, `download/preview-mobile-hero.png`, `download/preview-mobile-full.png`.
