import { cn } from "@/lib/utils";
import React from "react";

/**
 * PriceBadge – displays a price or value in a rounded pill.
 * Maps to the `price-badge` helper component in the design system.
 */
export function PriceBadge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        // Primary accent fill, white text
        "bg-primary text-onPrimary",
        // Pill shape and small padding
        "rounded-full px-2 py-1",
        // Display-sm typography
        "text-sm leading-[1.2] font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </span>
  );
}
