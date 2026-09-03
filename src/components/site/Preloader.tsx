"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Preloader
 * --------
 * Cubre toda la pantalla con un overlay oscuro hasta que la página terminó
 * de hidratar y el Hero está listo para mostrarse. Mientras está visible,
 * bloquea el scroll del usuario.
 *
 * - Liviano: solo CSS + framer-motion, sin assets externos pesados.
 * - Simple: el logo "small" del proyecto centrado + un anillo orbital animado.
 * - Accesible: respeta prefers-reduced-motion (sin animación de giro, fade out
 *   directo), aria-hidden durante el overlay, y un timeout de seguridad (3.5s)
 *   para nunca quedar atrapado si un evento de carga no dispara.
 */
export function Preloader() {
  const [done, setDone] = useState(false);

  // Lock scroll while the overlay is visible.
  useEffect(() => {
    if (done) return;
    const prevOverflow = document.body.style.overflow;
    const prevTouchAction = document.body.style.touchAction;
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.touchAction = prevTouchAction;
    };
  }, [done]);

  // Trigger finish on load, with a safety net so we never stay stuck.
  useEffect(() => {
    let raf = 0;
    let timeout: ReturnType<typeof setTimeout>;
    let safety: ReturnType<typeof setTimeout>;

    const finish = () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
      setDone(true);
    };

    const scheduleFinish = () => {
      // Wait two frames so the Hero's first paint is committed before we fade out.
      raf = requestAnimationFrame(() => {
        raf = requestAnimationFrame(finish);
      });
    };

    // Enforce a minimum visible time so the preloader doesn't flash on fast connections.
    const MIN_VISIBLE_MS = 800;
    const startedAt = Date.now();

    const whenReady = () => {
      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
      setTimeout(scheduleFinish, remaining);
    };

    if (document.readyState === "complete") {
      whenReady();
    } else {
      const onLoad = () => whenReady();
      window.addEventListener("load", onLoad, { once: true });
      // Fallback in case `load` already fired before we subscribed.
      timeout = setTimeout(whenReady, 1200);
    }

    // Safety net: never stay stuck on the preloader.
    safety = setTimeout(finish, 3500);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
      clearTimeout(safety);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          aria-hidden
          className="fixed inset-0 z-[100] flex items-center justify-center bg-deep-blue"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ pointerEvents: "auto" }}
        >
          {/* Subtle radial wash so the dark blue is not flat */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 45%, rgba(9,96,225,0.25) 0%, rgba(7,23,63,0) 70%)",
            }}
          />

          {/* Logo + orbital ring */}
          <div className="relative flex items-center justify-center">
            {/* Animated orbital ring (CSS only, paused when reduced motion) */}
            <span
              className="preloader-ring absolute rounded-full border border-blue-yonder/40"
              style={{
                width: 128,
                height: 128,
                animation: "preloader-spin 2.4s linear infinite",
                borderTopColor: "#EAFE07",
                borderRightColor: "transparent",
                borderBottomColor: "transparent",
                borderLeftColor: "#2E96F5",
              }}
            />
            <span
              className="preloader-ring absolute rounded-full border border-white/10"
              style={{
                width: 168,
                height: 168,
                animation: "preloader-spin-reverse 4s linear infinite",
                borderTopColor: "transparent",
                borderRightColor: "#0960E1",
                borderBottomColor: "transparent",
                borderLeftColor: "transparent",
                opacity: 0.5,
              }}
            />

            {/* Small official logo */}
            <img
              src="/logos/space-apps-white-small.svg"
              alt=""
              className="relative h-16 w-16 object-contain animate-pulse"
              style={{ animationDuration: "2s" }}
            />
          </div>

          {/* Tiny status text at the bottom */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono-code text-[10px] uppercase tracking-[0.35em] text-muted-foreground/70">
            NASA Space Apps · Salta 2026
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
