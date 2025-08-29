"use client";

import { RepeatIcon } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-m";
import React, { useEffect, useState } from "react";

import { CoderNandanMark } from "@/components/codernandan-mark";
import { Button } from "@/components/ui/button";
import { SimpleTooltip } from "@/components/ui/tooltip";

export function Hello() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const realUser = isRealUser();
    if (realUser) {
      setTimeout(() => {
        setShowAnimation(true);
      }, 500);
    }
  }, []);

  const restartAnimation = () => {
    setShowAnimation(false);
    setTimeout(() => {
      setShowAnimation(true);
    }, 100);
  };

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={showAnimation ? "show" : "hide"}
          className="flex items-center justify-center text-black dark:text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <CoderNandanMark className="h-12 sm:h-16" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-end justify-end">
        <SimpleTooltip content="Restart animation">
          <Button
            className="translate-px"
            variant="outline"
            size="icon"
            onClick={restartAnimation}
          >
            <RepeatIcon />
            <span className="sr-only">Restart animation</span>
          </Button>
        </SimpleTooltip>
      </div>
    </>
  );
}

function isRealUser() {
  if (navigator.webdriver) {
    return false;
  }

  if (!navigator.languages || navigator.languages.length === 0) {
    return false;
  }

  if (/HeadlessChrome|Puppeteer|Playwright/i.test(navigator.userAgent)) {
    return false;
  }

  return true;
}
