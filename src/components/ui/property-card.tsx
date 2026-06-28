import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

/**
 * PropertyCard – matches the design token `property-card`.
 * A photo-first card with ~14px corner clipping, used for property listings.
 */
export function PropertyCard({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        // Surface and text colors from design tokens
        "bg-surface-card text-ink",
        // Rounded md (~14px) and typography body-sm
        "rounded-md",
        className
      )}
    >
      {children}
    </div>
  );
}
