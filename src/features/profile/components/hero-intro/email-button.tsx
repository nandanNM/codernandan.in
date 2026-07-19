"use client";

import { MailIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useIsClient } from "@/hooks/use-is-client";
import { decodeEmail } from "@/utils/string";

export function EmailButton({ email }: { email: string }) {
  const isClient = useIsClient();

  return (
    <Button
      variant="secondary"
      className="rounded-[9px] border border-border"
      asChild
    >
      <a href={isClient ? `mailto:${decodeEmail(email)}` : "#"}>
        <MailIcon />
        Send an email
      </a>
    </Button>
  );
}
