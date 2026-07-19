"use client";

import * as motion from "motion/react-m";

export function RoleUnderline() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full text-muted-foreground/70"
      viewBox="0 0 300 14"
      fill="none"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M5 7 C 60 3.5, 160 3.5, 295 5.5"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      />
      <motion.path
        d="M12 11 C 90 8, 200 7.5, 288 9.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
      />
    </svg>
  );
}
