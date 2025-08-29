import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "leet-master",
    title: "Leet Master",
    period: {
      start: "06.2025",
    },
    link: "https://leetmaster.in",
    skills: [
      "React",
      "TypeScript",
      "Framer Motion",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "Drizzle ORM",
    ],
    description: `Engineered a full-stack platform for competitive programmers to practice Data Structures and Algorithms. The platform is designed for a seamless and efficient learning experience.
- 🧩 Custom test cases
- 🌐 Multi-language support
- 📊 Detailed progress tracking
- ⚡ Clean and intuitive interface
- 🎯 Built for seamless learning and real-world coding prep

Source Code: https://github.com/nandanNM/leet-master`,
    logo: "https://assets.codernandan.in/images/project-logos/leetmaster.svg",
    isExpanded: true,
  },
  {
    id: "crazxy-ui",
    title: "Crazxy UI",
    period: {
      start: "03.2025",
    },
    link: "https://crazxyui.in",
    skills: ["React", "TypeScript", "Framer Motion", "TailwindCSS"],
    description: `Founder of Crazxy UI — a headless React component library to give developers ultimate flexibility and creative freedom.
- 🎨 Unstyled, accessible components
- ⚡ Fully customizable to build your own design system
- 🚀 Zero limits on creativity

Source Code: https://github.com/nandanNM/crazxy-ui`,
    logo: "https://assets.codernandan.in/images/project-logos/crazxyui.webp",
  },
  {
    id: "mat-exam-portal",
    title: "MAT Exam Portal",
    period: {
      start: "12.2024",
    },
    link: "https://www.matpg1.in/",
    skills: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Shadcn UI",
      "Better Auth",
    ],
    description: `A SaaS platform for university results and MAT exam preparation.
- 📖 Access results and important questions
- 🏫 Valuable resource hub for students
- 🌍 Helps educators and institutions reach wider audiences
- 🎯 Simplifies exam prep and enhances learning

Source Code: https://github.com/nandanNM/mat-exam`,
  },
  {
    id: "snapebook",
    title: "Snapebook",
    period: {
      start: "04.2024",
      end: "06.2024",
    },
    link: "https://snapebook.vercel.app/",
    skills: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Shadcn UI",
      "Lucia Auth",
      "Stream SDK",
    ],
    description: `A feature-rich social media project designed for engagement.
-  Connect, share posts, chat in real-time
-  Stories, groups, and forums
-  Reactions & profile customization
- Seamless multimedia sharing
- Dynamic and interactive space

Source Code: https://github.com/nandanNM/next-js-15-snapebook-socel-app`,
  },
  {
    id: "youtube-clone",
    title: "YouTube",
    period: {
      start: "01.2024",
      end: "02.2024",
    },
    link: "https://github.com/nandanNM/you-backend",
    skills: [
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Multer",
      "JWT",
      "Nodemailer",
      "Cloudinary",
    ],
    description: `A backend system inspired by YouTube to manage video content.
-  Video uploading, processing & delivery
-  User authentication & metadata management
-  Optimized streaming with adaptive bitrate
-  Real-time analytics
-  Scalable and efficient backend

Source Code: https://github.com/nandanNM/you-backend`,
  },
];
