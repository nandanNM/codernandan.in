"use client";

import NumberFlow, { continuous } from "@number-flow/react";
import { EyeIcon } from "lucide-react";

import { useVisitorCount } from "@/hooks/use-visitor-count";
import { cn } from "@/lib/utils";

export function VisitorCount({ className }: { className?: string }) {
  const count = useVisitorCount();

  return (
    <span
      className={cn(
        "flex items-center gap-1 font-mono text-sm text-muted-foreground select-none",
        className
      )}
      title={`${(count ?? 0).toLocaleString()} unique visitors`}
    >
      <EyeIcon className="size-4" aria-hidden />
      <NumberFlow plugins={[continuous]} value={count ?? 0} />
      <span className="sr-only">unique visitors</span>
    </span>
  );
}
