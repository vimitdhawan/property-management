import { cn } from "@/lib/utils";
import React from "react";

type AvailabilityStatus = "available" | "booked" | "pending";

const statusStyles: Record<AvailabilityStatus, string> = {
  // Maps to bg-success / text-success-foreground
  available: "bg-emerald-500 text-white",
  // Maps to bg-destructive / text-destructive-foreground
  booked: "bg-red-500 text-white",
  // Maps to bg-muted / text-muted-foreground
  pending: "bg-slate-400 text-slate-900",
};

/**
 * AvailabilityBadge – shows property availability status.
 * Variants: available, booked, pending.
 */
export function AvailabilityBadge({
  status,
  className,
  children,
}: {
  status: AvailabilityStatus;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        // Base pill styling with caption typography
        "rounded-full px-2 py-0.5 text-xs leading-[1.29] font-medium",
        statusStyles[status],
        className
      )}
    >
      {children}
    </span>
  );
}
