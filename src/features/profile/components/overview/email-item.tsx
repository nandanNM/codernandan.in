"use client";

import { MailIcon } from "lucide-react";

import { CopyButton } from "@/components/copy-button";
import { useIsClient } from "@/hooks/use-is-client";
import { decodeEmail } from "@/utils/string";

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";

export function EmailItem({ email }: { email: string }) {
  const isClient = useIsClient();
  const emailDecoded = decodeEmail(email);

  return (
    <IntroItem className="group">
      <IntroItemIcon>
        <MailIcon />
      </IntroItemIcon>

      <IntroItemContent className="flex">
        <IntroItemLink
          href={isClient ? `mailto:${emailDecoded}` : ""}
          suppressHydrationWarning
        >
          {isClient ? emailDecoded : ""}
        </IntroItemLink>
      </IntroItemContent>

      {isClient && (
        <CopyButton
          className="size-6 -translate-x-2 border-none bg-transparent text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:bg-accent"
          variant="ghost"
          value={emailDecoded}
          aria-label="Copy email"
        />
      )}
    </IntroItem>
  );
}
