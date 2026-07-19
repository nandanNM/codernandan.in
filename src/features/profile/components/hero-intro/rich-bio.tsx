import type { IconType } from "react-icons";
import {
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
} from "react-icons/si";

import { RoleUnderline } from "./role-underline";

type Tech = {
  name: string;
  href: string;
  icon: IconType;
};

const TECH = {
  react: {
    name: "React",
    href: "https://react.dev/",
    icon: SiReact,
  },
  express: {
    name: "Express",
    href: "https://expressjs.com/",
    icon: SiExpress,
  },
  fastapi: {
    name: "FastAPI",
    href: "https://fastapi.tiangolo.com/",
    icon: SiFastapi,
  },
  nextjs: {
    name: "Next.js",
    href: "https://nextjs.org/",
    icon: SiNextdotjs,
  },
  postgres: {
    name: "PostgreSQL",
    href: "https://www.postgresql.org/",
    icon: SiPostgresql,
  },
  mongodb: {
    name: "MongoDB",
    href: "https://www.mongodb.com/",
    icon: SiMongodb,
  },
} satisfies Record<string, Tech>;

function TechToken({ tech }: { tech: Tech }) {
  const Icon = tech.icon;

  return (
    <a
      href={tech.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 align-middle font-semibold whitespace-nowrap text-foreground underline-offset-4 hover:underline"
    >
      <Icon className="size-4.5 shrink-0" aria-hidden />
      {tech.name}
    </a>
  );
}

function BioLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-foreground underline-offset-4 hover:underline"
    >
      {children}
    </a>
  );
}

export function RichBio() {
  return (
    <div className="space-y-4 text-[15px] leading-relaxed text-pretty text-muted-foreground sm:text-base">
      <p>
        I&apos;m Nandan Manna (call me Nandan) — a{" "}
        <span className="relative inline-block font-semibold whitespace-nowrap text-foreground">
          Full Stack Developer
          <RoleUnderline />
        </span>{" "}
        <span className="text-foreground">&amp; AI Engineer</span> with 2+ years
        of experience, known for bridging creative UI with scalable backends and
        taking ownership from concept to deployment.
      </p>

      <p>
        Passionate about exploring new technologies and turning ideas into
        reality through polished, thoughtfully crafted projects — AI Intern @{" "}
        <BioLink href="https://www.lyzr.ai">Lyzr.AI</BioLink>, SDE @{" "}
        <span className="font-semibold text-foreground">CareerCafe</span>.
      </p>

      <p>
        Creator of <BioLink href="https://leetmaster.in">LeetMaster</BioLink>{" "}
        (helping developers master coding through structured practice) and{" "}
        <BioLink href="https://crazxyui.in">Crazxy UI</BioLink> (modern,
        reusable UI components).
      </p>

      <p className="leading-loose">
        I use <TechToken tech={TECH.react} /> to build frontends,{" "}
        <TechToken tech={TECH.express} /> and <TechToken tech={TECH.fastapi} />{" "}
        for backends, <TechToken tech={TECH.nextjs} /> to create complete
        full-stack web apps, and by using modern databases like{" "}
        <TechToken tech={TECH.postgres} /> and <TechToken tech={TECH.mongodb} />
        .
      </p>
    </div>
  );
}
