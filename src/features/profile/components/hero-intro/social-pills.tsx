"use client";

import { AlignLeftIcon, MapPinIcon } from "lucide-react";

import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip } from "@/components/ui/tooltip-card";
import { USER } from "@/data/user";
import { useGitHubProfile } from "@/hooks/use-github-profile";
import { cn } from "@/lib/utils";

import type { HeroSocial, HeroSocialStat } from "../../data/hero";
import { HERO_SOCIALS, HERO_SOCIALS_MORE } from "../../data/hero";

const pillClassName = cn(
  "inline-flex h-8 cursor-pointer items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 text-sm font-medium",
  "transition-colors hover:bg-secondary"
);

function ProfileCardLayout({
  avatar,
  name,
  handle,
  role,
  location,
  stats,
}: {
  avatar: string;
  name: string;
  handle: string;
  role: string;
  location: string;
  stats: HeroSocialStat[];
}) {
  return (
    <div className="w-64">
      <Avatar className="size-14 ring-1 ring-border">
        <AvatarImage src={avatar} alt={name} className="object-cover" />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>

      <div className="mt-3">
        <div className="text-base leading-tight font-semibold">{name}</div>
        <div className="text-sm text-muted-foreground">{handle}</div>
      </div>

      <p className="mt-3 text-sm text-pretty text-foreground">{role}</p>

      <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
        <MapPinIcon className="size-3.5 shrink-0" />
        {location}
      </div>

      <div className="mt-3 flex items-center gap-4 border-t border-border pt-3 text-sm">
        {stats.map((stat) => (
          <div key={stat.label}>
            <span className="font-semibold text-foreground">{stat.value}</span>{" "}
            <span className="text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GitHubProfileCard({ social }: { social: HeroSocial }) {
  const github = useGitHubProfile(social.handle);

  return (
    <ProfileCardLayout
      avatar={github?.avatar_url ?? USER.avatar}
      name={github?.name ?? USER.displayName}
      handle={github?.login ?? social.handle}
      role={github?.bio ?? social.role}
      location={github?.location ?? social.location}
      stats={
        github
          ? [
              { value: String(github.public_repos), label: "Repositories" },
              { value: String(github.followers), label: "Followers" },
            ]
          : social.stats
      }
    />
  );
}

function ProfileCard({ social }: { social: HeroSocial }) {
  if (social.icon === "github") {
    return <GitHubProfileCard social={social} />;
  }

  return (
    <ProfileCardLayout
      avatar={social.avatar ?? USER.avatar}
      name={USER.displayName}
      handle={social.handle}
      role={social.role}
      location={social.location}
      stats={social.stats}
    />
  );
}

function SocialPill({ social }: { social: HeroSocial }) {
  const Icon = Icons[social.icon];

  const pill = (
    <a
      className={pillClassName}
      href={social.href}
      target="_blank"
      rel="noopener"
    >
      <Icon className="size-4" />
      {social.label}
    </a>
  );

  if (social.hideCard) {
    return pill;
  }

  return <Tooltip content={<ProfileCard social={social} />}>{pill}</Tooltip>;
}

export function SocialPills() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {HERO_SOCIALS.map((social) => (
        <SocialPill key={social.label} social={social} />
      ))}

      <DropdownMenu>
        <DropdownMenuTrigger className={pillClassName}>
          <AlignLeftIcon className="size-4" />
          More
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="start"
          className="flex min-w-44 flex-col gap-1.5 rounded-2xl p-2"
        >
          {HERO_SOCIALS_MORE.map((social) => {
            const Icon = Icons[social.icon];

            return (
              <DropdownMenuItem
                key={social.label}
                className="rounded-lg bg-secondary/50 px-3 py-2 font-medium"
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener">
                  <Icon className="size-4 text-foreground" />
                  {social.label}
                </a>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
