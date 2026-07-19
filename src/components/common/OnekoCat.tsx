"use client";

import Script from "next/script";
import React, { useEffect, useState } from "react";

import { catConfig } from "@/config/cat";

const CAT_SPRITES = [
  "./oneko/oneko-nandan.gif",
  "./oneko/oneko.gif",
  "./oneko/oneko-maia.gif",
  "./oneko/oneko-tora.gif",
];

export default function OnekoCat() {
  const [cat, setCat] = useState<string | null>(null);

  useEffect(() => {
    setCat(CAT_SPRITES[Math.floor(Math.random() * CAT_SPRITES.length)]);
  }, []);

  if (!catConfig.enabled || !cat) {
    return null;
  }

  return <Script src="./oneko/oneko.js" data-cat={cat} />;
}
