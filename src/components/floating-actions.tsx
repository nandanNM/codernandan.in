"use client";

import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MUSIC_SRC = "https://assets.codernandan.in/audio/musics/v1.mp3";

export function FloatingActions() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) {
      const audio = new Audio(MUSIC_SRC);
      audio.loop = true;
      audio.volume = 0.5;
      audioRef.current = audio;
    }

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }

    audioRef.current
      .play()
      .then(() => setPlaying(true))
      .catch(() => {});
  };

  return (
    <Button
      variant="secondary"
      size="icon:lg"
      aria-label={playing ? "Pause music" : "Play music"}
      onClick={toggle}
      className={cn(
        "[--bottom:1rem] lg:[--bottom:2rem]",
        "fixed right-4 bottom-[calc(var(--bottom,1rem)+3.5rem+env(safe-area-inset-bottom,0px))] z-50 lg:right-8",
        "rounded-xl bg-[#494d57] text-white ring-1 ring-border ring-offset-2 ring-offset-background hover:bg-[#494d57] dark:bg-[#494d57] dark:hover:bg-[#494d57]"
      )}
    >
      {playing ? (
        <MusicPlayingIcon className="size-4.5" />
      ) : (
        <span className="flex h-4 items-center gap-[2.5px]" aria-hidden>
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="h-1.5 w-[2.5px] rounded-full bg-current" />
          ))}
        </span>
      )}
    </Button>
  );
}

function MusicPlayingIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
    >
      <rect width="2.8" height="12" x="1" y="6" fill="currentColor">
        <animate
          attributeName="y"
          begin="barC.begin+0.4s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
          values="6;1;6"
        />
        <animate
          attributeName="height"
          begin="barC.begin+0.4s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
          values="12;22;12"
        />
      </rect>
      <rect width="2.8" height="12" x="5.8" y="6" fill="currentColor">
        <animate
          attributeName="y"
          begin="barC.begin+0.2s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
          values="6;1;6"
        />
        <animate
          attributeName="height"
          begin="barC.begin+0.2s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
          values="12;22;12"
        />
      </rect>
      <rect width="2.8" height="12" x="10.6" y="6" fill="currentColor">
        <animate
          id="barC"
          attributeName="y"
          begin="0;barE.end-0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
          values="6;1;6"
        />
        <animate
          attributeName="height"
          begin="0;barE.end-0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
          values="12;22;12"
        />
      </rect>
      <rect width="2.8" height="12" x="15.4" y="6" fill="currentColor">
        <animate
          attributeName="y"
          begin="barC.begin+0.2s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
          values="6;1;6"
        />
        <animate
          attributeName="height"
          begin="barC.begin+0.2s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
          values="12;22;12"
        />
      </rect>
      <rect width="2.8" height="12" x="20.2" y="6" fill="currentColor">
        <animate
          id="barE"
          attributeName="y"
          begin="barC.begin+0.4s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
          values="6;1;6"
        />
        <animate
          attributeName="height"
          begin="barC.begin+0.4s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
          values="12;22;12"
        />
      </rect>
    </svg>
  );
}
