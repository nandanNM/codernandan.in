import dynamic from "next/dynamic";

import { Quote } from "@/components/common/Quote";
import { FloatingActions } from "@/components/floating-actions";
import { PluckLine } from "@/components/pluck-line";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const ScrollTop = dynamic(() =>
  import("@/components/scroll-top").then((mod) => mod.ScrollTop)
);

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="max-w-screen overflow-x-hidden px-2">{children}</main>
      <div className="mx-auto px-2 md:max-w-3xl">
        <PluckLine />
      </div>
      <Quote />
      <SiteFooter />

      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-50"
        aria-hidden
      >
        <div
          className="h-24 bg-linear-to-b from-transparent to-background backdrop-blur-[1px]"
          style={{
            maskImage:
              "linear-gradient(to top, var(--background) 25%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to top, var(--background) 25%, transparent)",
          }}
        />
        <div className="bg-background pb-[env(safe-area-inset-bottom,0)]" />
      </div>

      <FloatingActions />
      <ScrollTop />
    </>
  );
}
