import type { Icons } from "@/components/icons";

export type HeroSocialStat = {
  value: string;
  label: string;
};

export type HeroSocial = {
  label: string;
  icon: keyof typeof Icons;
  href: string;
  handle: string;
  role: string;
  location: string;
  avatar?: string;
  hideCard?: boolean;
  stats: HeroSocialStat[];
};

export const HERO_SOCIALS: HeroSocial[] = [
  {
    label: "GitHub",
    icon: "github",
    href: "https://github.com/nandanNM",
    handle: "nandanNM",
    role: "Full Stack Developer & Founder of LeetMaster",
    location: "India (Bharat)",
    stats: [
      { value: "40+", label: "Repositories" },
      { value: "100+", label: "Followers" },
    ],
  },
  {
    label: "Twitter",
    icon: "x",
    href: "https://x.com/coder_nandan",
    handle: "@coder_nandan",
    role: "Full-Stack Developer | Building things with a keyboard that goes bip boup bip | Building powerful software, not just projects | Always learning 🌍💡",
    location: "Kolkata",
    stats: [
      { value: "143", label: "Following" },
      { value: "135", label: "Followers" },
    ],
  },
  {
    label: "LinkedIn",
    icon: "linkedin",
    href: "https://linkedin.com/in/codernandan",
    handle: "in/codernandan",
    role: "AI Intern @ Lyzr.AI | SDE @ Career Cafe | Full-Stack Developer | Building Innovative Solutions with AI",
    location: "Kolkata, West Bengal, India",
    avatar: "https://assets.codernandan.in/images/codernandan-avatar-2.jpeg",
    stats: [{ value: "500+", label: "Connections" }],
  },
  {
    label: "Hashnode",
    icon: "hashnode",
    href: "https://coder-nandan.hashnode.dev",
    handle: "@coder_nandan",
    role: "Writing about web development",
    location: "Kolkata, West Bengal, India",
    stats: [{ value: "1k+", label: "Followers" }],
  },
  {
    label: "Resume",
    icon: "paperclip",
    href: "https://drive.google.com/file/d/16u1grC5Q4AVGuS8nF9BD83VeVPAkRoJv/view?usp=sharing",
    handle: "nandan-manna.pdf",
    role: "Full Stack Developer & AI Engineer — view my resume",
    location: "Kolkata, West Bengal, India",
    hideCard: true,
    stats: [{ value: "PDF", label: "Google Drive" }],
  },
];

export const HERO_SOCIALS_MORE: HeroSocial[] = [
  {
    label: "YouTube",
    icon: "youtube",
    href: "https://www.youtube.com/@codernandan",
    handle: "@codernandan",
    role: "Coding tutorials & project builds",
    location: "Kolkata, West Bengal, India",
    stats: [{ value: "1k+", label: "Subscribers" }],
  },
  {
    label: "LeetCode",
    icon: "leetcode",
    href: "https://leetcode.com/u/codernandan",
    handle: "codernandan",
    role: "Solving DSA problems daily",
    location: "Kolkata, West Bengal, India",
    stats: [{ value: "300+", label: "Solved" }],
  },
];
