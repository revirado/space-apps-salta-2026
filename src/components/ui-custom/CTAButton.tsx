"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type Variant = "primary" | "accent" | "ghost" | "outline";

interface CTAButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: Variant;
  glow?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-neon-blue text-white hover:bg-blue-yonder hover:text-deep-blue border border-neon-blue hover:border-blue-yonder",
  accent:
    "bg-neon-yellow text-deep-blue hover:bg-white hover:text-deep-blue border border-neon-yellow hover:border-white",
  ghost:
    "bg-transparent text-foreground hover:bg-white/5 border border-white/10",
  outline:
    "bg-transparent text-foreground hover:bg-white/5 border border-white/20 hover:border-blue-yonder",
};

export const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant = "primary", glow, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative font-display font-bold tracking-wide uppercase",
          "px-6 py-3 text-sm rounded-md transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-yonder focus-visible:ring-offset-2 focus-visible:ring-offset-deep-blue",
          variants[variant],
          glow && "ring-glow-blue",
          className,
        )}
        {...props}
      >
        {children}
      </Button>
    );
  },
);
CTAButton.displayName = "CTAButton";
