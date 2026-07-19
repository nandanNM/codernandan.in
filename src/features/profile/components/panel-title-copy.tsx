"use client";

import { LinkIcon } from "lucide-react";

import { CopyButton } from "@/components/copy-button";
import { createHeadingUrl } from "@/components/heading";
import { cn } from "@/lib/utils";

export function PanelTitleCopy({
  id,
  className,
  ...props
}: Omit<React.ComponentProps<typeof CopyButton>, "value"> & {
  id: string;
}) {
  return (
    <CopyButton
      className={cn(
        "absolute top-1 ml-1 size-7 shrink-0 border-none bg-transparent text-muted-foreground opacity-0 transition-opacity group-hover/panel-title:opacity-100 hover:bg-accent",
        className
      )}
      variant="ghost"
      value={() => createHeadingUrl(id)}
      idleIcon={<LinkIcon className="size-3.5" />}
      aria-label="Copy link to section"
      {...props}
    />
  );
}
