"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ctaConfig } from "@/config/cta";
import { useHapticFeedback } from "@/hooks/use-haptic-feedback";

export function BookCallButton() {
  const { triggerHaptic, isMobile } = useHapticFeedback();
  const [showCalPopup, setShowCalPopup] = useState(false);

  useEffect(() => {
    const cal = async () => {
      try {
        const calApi = await getCalApi();
        if (calApi) {
          calApi("on", {
            action: "bookingSuccessful",
            callback: () => {
              setShowCalPopup(false);
            },
          });
        }
      } catch (error) {
        console.error("Failed to initialize Cal API:", error);
      }
    };
    cal();
  }, []);

  const handleClick = () => {
    if (isMobile()) {
      triggerHaptic("medium");
    }
    setShowCalPopup(true);
  };

  return (
    <>
      <Button
        className="rounded-[9px] bg-[#494d57] text-white ring-1 ring-border ring-offset-2 ring-offset-background hover:bg-[#494d57] dark:bg-[#494d57] dark:text-white dark:hover:bg-[#494d57]"
        onClick={handleClick}
      >
        <CalendarIcon />
        Book an intro call
      </Button>

      <Dialog open={showCalPopup} onOpenChange={setShowCalPopup}>
        <DialogContent className="max-h-[90vh] max-w-[calc(100vw-2rem)] overflow-hidden sm:max-w-[calc(100vw-4rem)] md:max-w-4xl">
          <DialogHeader>
            <DialogTitle>Book a Meeting</DialogTitle>
            <DialogDescription>
              Schedule a time to connect and discuss opportunities
            </DialogDescription>
          </DialogHeader>

          <div className="max-h-[calc(90vh-220px)] overflow-y-auto rounded-lg">
            <Cal
              calLink={ctaConfig.calLink}
              config={{
                name: "Portfolio Visitor",
                email: "",
                notes: "Booked from portfolio website",
              }}
              className="h-[500px] w-full rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M22 10H2v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3zM7 8a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1m10 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M19 4h-1v3a1 1 0 0 1-2 0V4H8v3a1 1 0 0 1-2 0V4H5a3 3 0 0 0-3 3v3h20V7a3 3 0 0 0-3-3"
      />
    </svg>
  );
}
