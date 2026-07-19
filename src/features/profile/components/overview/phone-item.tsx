"use client";

import { PhoneIcon } from "lucide-react";

import { CopyButton } from "@/components/copy-button";
import { useIsClient } from "@/hooks/use-is-client";
import { decodePhoneNumber, formatPhoneNumber } from "@/utils/string";

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";

export function PhoneItem({ phoneNumber }: { phoneNumber: string }) {
  const isClient = useIsClient();
  const phoneNumberDecoded = decodePhoneNumber(phoneNumber);

  return (
    <IntroItem className="group">
      <IntroItemIcon>
        <PhoneIcon />
      </IntroItemIcon>

      <IntroItemContent className="flex">
        <IntroItemLink
          href={isClient ? `tel:${phoneNumberDecoded}` : ""}
          suppressHydrationWarning
        >
          {isClient ? formatPhoneNumber(phoneNumberDecoded) : ""}
        </IntroItemLink>
      </IntroItemContent>

      {isClient && (
        <CopyButton
          className="size-6 -translate-x-2 border-none bg-transparent text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:bg-accent"
          variant="ghost"
          value={phoneNumberDecoded}
          aria-label="Copy phone number"
        />
      )}
    </IntroItem>
  );
}
