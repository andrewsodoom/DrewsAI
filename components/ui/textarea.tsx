import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return <textarea data-slot="textarea" className={cn("min-h-24 w-full rounded-xl border bg-surface px-3 py-2 text-base text-copy-primary shadow-xs outline-none transition-colors placeholder:text-copy-muted focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className)} {...props} />;
}

export { Textarea };
