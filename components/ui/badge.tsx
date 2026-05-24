import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center whitespace-normal rounded-full border border-gold/30 bg-champagne/18 px-3 py-1 text-center text-xs font-medium leading-snug text-navy",
        className
      )}
      {...props}
    />
  );
}
