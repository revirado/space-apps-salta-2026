"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
  index?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-4 max-w-3xl", alignClass, className)}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3 font-mono-code text-xs uppercase tracking-[0.25em] text-blue-yonder/90"
        >
          <span className="inline-block h-px w-8 bg-blue-yonder/70" aria-hidden />
          <span>{eyebrow}</span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
        className="font-display font-black text-balance text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
          className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
