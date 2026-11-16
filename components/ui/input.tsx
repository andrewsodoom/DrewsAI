import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return <input type={type} data-slot="input" className={cn("h-10 w-full min-w-0 rounded-xl border bg-surface px-3 py-1 text-base text-copy-primary shadow-xs outline-none transition-colors placeholder:text-copy-muted focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className)} {...props} />;
}

export { Input };
