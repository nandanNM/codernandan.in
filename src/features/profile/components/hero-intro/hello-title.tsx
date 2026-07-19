"use client";

import { useSyncExternalStore } from "react";

import { PanelTitle } from "../panel";

const SSR_TEXT = "Hello";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour >= 0 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 17) return "Good afternoon";
  return "Good evening";
}

export function HelloTitle() {
  const greeting = useSyncExternalStore(
    () => () => {},
    getGreeting,
    () => SSR_TEXT
  );

  return <PanelTitle suppressHydrationWarning>{greeting}</PanelTitle>;
}
