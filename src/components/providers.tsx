"use client";

import { AppProgressProvider } from "@bprogress/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ReactLenis from "lenis/react";
import { LazyMotion } from "motion/react";
import { ThemeProvider } from "next-themes";

import { Toaster } from "@/components/ui/sonner";

// import ChatBubble from "./common/ChatBubble";
import OnekoCat from "./common/OnekoCat";

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
      <ReactLenis root>
        <AppProgressProvider
          color="var(--foreground)"
          height="2px"
          delay={500}
          options={{ showSpinner: false }}
        >
          <LazyMotion features={loadFeatures} strict>
            {children}
            <OnekoCat />
          </LazyMotion>
        </AppProgressProvider>
        <Toaster />
        <Analytics />
        <SpeedInsights />
        {/* <ChatBubble /> */}
        <GoogleAnalytics gaId="G-XSRMVN6E43" />
      </ReactLenis>
    </ThemeProvider>
  );
}
