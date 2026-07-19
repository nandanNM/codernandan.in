"use client";

import { useTheme } from "next-themes";
import React, { useCallback, useEffect } from "react";

import { MoonIcon } from "@/components/animated-icons/moon-icon";
import { SunMediumIcon } from "@/components/animated-icons/sun-medium-icon";
import { META_THEME_COLORS } from "@/config/site";
import { useClickSound } from "@/hooks/use-click-sound";
import { useMetaColor } from "@/hooks/use-meta-color";

import { Button } from "./ui/button";
import { SimpleTooltip } from "./ui/tooltip";

export function ToggleTheme({
  variant = "outline",
  size = "icon",
  enableHotkey = false,
  ...props
}: React.ComponentProps<typeof Button> & { enableHotkey?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();

  const { setMetaColor } = useMetaColor();

  const playClick = useClickSound();

  const handleToggle = useCallback(() => {
    playClick();

    const applyTheme = () => {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
      setMetaColor(
        resolvedTheme === "dark"
          ? META_THEME_COLORS.light
          : META_THEME_COLORS.dark
      );
    };

    if (typeof document !== "undefined" && "startViewTransition" in document) {
      (
        document as Document & {
          startViewTransition: (callback: () => void) => void;
        }
      ).startViewTransition(applyTheme);
    } else {
      applyTheme();
    }
  }, [resolvedTheme, setTheme, setMetaColor, playClick]);

  useEffect(() => {
    if (!enableHotkey) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "d") return;
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;

      const target = e.target as HTMLElement;
      if (
        target.isContentEditable ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
      ) {
        return;
      }

      e.preventDefault();
      handleToggle();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [enableHotkey, handleToggle]);

  return (
    <SimpleTooltip
      content={
        <span className="flex items-center gap-1.5">
          Toggle Mode
          <kbd className="inline-flex h-4 min-w-4 items-center justify-center rounded-sm bg-primary-foreground/20 px-1 font-sans text-[11px] font-medium">
            D
          </kbd>
        </span>
      }
    >
      <Button
        variant={variant}
        size={size}
        aria-label="Toggle theme"
        {...props}
        onClick={handleToggle}
      >
        <MoonIcon className="hidden [html.dark_&]:block" aria-hidden />
        <SunMediumIcon className="hidden [html.light_&]:block" aria-hidden />
        <span className="sr-only">Toggle Theme</span>
      </Button>
    </SimpleTooltip>
  );
}
