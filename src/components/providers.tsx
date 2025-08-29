"use client";

import { AppProgressProvider } from "@bprogress/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LazyMotion } from "motion/react";
import { ThemeProvider } from "next-themes";

import { Toaster } from "@/components/ui/sonner";

const loadFeatures = () => import("motion/react").then((res) => res.domMax);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem
      disableTransitionOnChange
      enableColorScheme
      storageKey="theme"
      defaultTheme="system"
      attribute="class"
    >
      <AppProgressProvider
        color="var(--foreground)"
        height="2px"
        delay={500}
        options={{ showSpinner: false }}
      >
        <LazyMotion features={loadFeatures} strict>
          {children}
        </LazyMotion>
      </AppProgressProvider>

      <Toaster />
      <Analytics />
      <SpeedInsights />
      <GoogleAnalytics gaId="G-XSRMVN6E43" />
    </ThemeProvider>
  );
}
