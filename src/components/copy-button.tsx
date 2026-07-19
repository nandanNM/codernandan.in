"use client";

import { CheckIcon, CircleXIcon, CopyIcon } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-m";
import React, { useOptimistic, useTransition } from "react";

import { useCopySound } from "@/hooks/use-copy-sound";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

export const motionIconVariants = {
  initial: { opacity: 0, scale: 0.8, filter: "blur(2px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 0.8 },
};

export const motionIconProps = {
  variants: motionIconVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
};

export function CopyButton({
  value,
  idleIcon,
  className,
  onCopySuccess,
  ...props
}: {
  value: string | (() => string);
  idleIcon?: React.ReactNode;
  onCopySuccess?: (value: string) => void;
} & Omit<React.ComponentProps<typeof Button>, "value" | "children">) {
  const [state, setState] = useOptimistic<"idle" | "copied" | "failed">("idle");
  const [, startTransition] = useTransition();
  const playCopySound = useCopySound();

  return (
    <Button
      size="icon"
      variant="secondary"
      className={cn("z-10 size-6 rounded-md", className)}
      onClick={() => {
        startTransition(async () => {
          const finalValue = typeof value === "function" ? value() : value;
          try {
            setState("copied");
            await navigator.clipboard.writeText(finalValue);
            playCopySound();
            onCopySuccess?.(finalValue);
          } catch {
            setState("failed");
          }
          await new Promise((resolve) => setTimeout(resolve, 1500));
        });
      }}
      {...props}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {state === "idle" ? (
          <motion.span key="idle" {...motionIconProps}>
            {idleIcon ?? <CopyIcon className="size-3" />}
          </motion.span>
        ) : state === "copied" ? (
          <motion.span key="copied" {...motionIconProps}>
            <CheckIcon className="size-3" strokeWidth={3} />
          </motion.span>
        ) : state === "failed" ? (
          <motion.span key="failed" {...motionIconProps}>
            <CircleXIcon className="size-3" />
          </motion.span>
        ) : null}
      </AnimatePresence>
      <span className="sr-only">Copy</span>
    </Button>
  );
}
