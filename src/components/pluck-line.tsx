"use client";

import { useEffect, useRef } from "react";

import soundManager from "@/lib/sound-manager";
import { cn } from "@/lib/utils";

const PLUCK_SOUND_URL =
  "https://assets.codernandan.in/audio/ui-sounds/string-pluck.mp3";
const VIEW_WIDTH = 1000;
const VIEW_HEIGHT = 40;
const REST_Y = VIEW_HEIGHT / 2;
const PLUCK_THRESHOLD = 4;

export function PluckLine({ className }: { className?: string }) {
  const pathRef = useRef<SVGPathElement | null>(null);
  const state = useRef({
    cx: VIEW_WIDTH / 2,
    cy: REST_Y,
    velocity: 0,
    raf: 0,
  });

  const setPath = (cx: number, cy: number) => {
    pathRef.current?.setAttribute(
      "d",
      `M 0 ${REST_Y} Q ${cx} ${cy} ${VIEW_WIDTH} ${REST_Y}`
    );
  };

  const springBack = () => {
    const s = state.current;

    const loop = () => {
      const accel = (REST_Y - s.cy) * 0.14;
      s.velocity = (s.velocity + accel) * 0.965;
      s.cy += s.velocity;
      setPath(s.cx, s.cy);

      if (Math.abs(s.cy - REST_Y) > 0.05 || Math.abs(s.velocity) > 0.05) {
        s.raf = requestAnimationFrame(loop);
      } else {
        s.cy = REST_Y;
        s.velocity = 0;
        setPath(s.cx, REST_Y);
      }
    };

    cancelAnimationFrame(s.raf);
    s.raf = requestAnimationFrame(loop);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const s = state.current;
    const rect = e.currentTarget.getBoundingClientRect();
    cancelAnimationFrame(s.raf);
    s.cx = ((e.clientX - rect.left) / rect.width) * VIEW_WIDTH;
    s.cy =
      REST_Y + ((e.clientY - rect.top) / rect.height - 0.5) * VIEW_HEIGHT * 3;
    s.velocity = 0;
    setPath(s.cx, s.cy);
  };

  const handleMouseLeave = () => {
    const s = state.current;
    if (Math.abs(s.cy - REST_Y) > PLUCK_THRESHOLD) {
      soundManager.playAudio(PLUCK_SOUND_URL);
    }
    springBack();
  };

  useEffect(() => {
    const s = state.current;
    return () => cancelAnimationFrame(s.raf);
  }, []);

  return (
    <div
      className={cn(
        "relative z-10 h-10 w-full cursor-pointer touch-none",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-hidden
    >
      <svg
        className="size-full overflow-visible"
        viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          ref={pathRef}
          d={`M 0 ${REST_Y} Q ${VIEW_WIDTH / 2} ${REST_Y} ${VIEW_WIDTH} ${REST_Y}`}
          stroke="var(--border)"
          strokeWidth="1.5"
          strokeDasharray="7 9"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
