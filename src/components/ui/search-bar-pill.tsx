import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

/**
 * SearchBarPill – matches the design token `search-bar-pill`.
 * It provides a pill‑shaped container that can hold up to three
 * segments (e.g., Where / When / Who). The component does **not** implement
 * the internal segment logic; it simply renders its children inside a
 * correctly styled wrapper.
 */
export function SearchBarPill({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        // Background and text colors map to Tailwind semantic variables
        "bg-canvas text-ink",
        // Rounded full (pill) and fixed height (64 px → h-16)
        "h-16 rounded-full",
        // Horizontal padding – 14 px left/right ≈ px-3.5 (14px) – using arbitrary value
        "flex items-center px-[14px]",
        className
      )}
    >
      {children}
    </div>
  );
}
