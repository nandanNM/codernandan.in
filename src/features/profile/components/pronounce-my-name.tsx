"use client";

import { useRef } from "react";

import type { VolumeIconHandle } from "@/components/animated-icons/volume-icon";
import { VolumeIcon } from "@/components/animated-icons/volume-icon";
import soundManager from "@/lib/sound-manager";
import { cn } from "@/lib/utils";

export function PronounceMyName({
  className,
  namePronunciationUrl,
}: {
  className?: string;
  namePronunciationUrl: string;
}) {
  const volumeIconRef = useRef<VolumeIconHandle>(null);

  const handlePlayClick = () => {
    volumeIconRef.current?.startAnimation();
    soundManager.playAudio(namePronunciationUrl);
  };

  return (
    <button
      className={cn(
        "relative flex touch-manipulation items-center justify-center text-muted-foreground transition-[color,scale] will-change-[scale] select-none hover:text-foreground active:scale-[0.9]",
        "after:absolute after:-inset-1",
        className
      )}
      onClick={handlePlayClick}
      aria-label="Pronounce my name"
    >
      <VolumeIcon ref={volumeIconRef} className="size-[0.6em]" aria-hidden />
      <span className="sr-only">Pronounce my name</span>
    </button>
  );
}
