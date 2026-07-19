import { IBM_Plex_Mono as FontMono } from "next/font/google";
import localFont from "next/font/local";

export const fontSans = localFont({
  src: [
    {
      path: "../assets/fonts/instagram-sans/InstagramSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/instagram-sans/InstagramSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/instagram-sans/InstagramSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-sans",
});

export const fontMono = FontMono({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mono",
});
