import dayjs from "dayjs";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { USER } from "@/data/user";
// import { About } from "@/features/profile/components/about";
// import { Awards } from "@/features/profile/components/awards";
import { Blog } from "@/features/profile/components/blog";
import { Certifications } from "@/features/profile/components/certifications";
import CTA from "@/features/profile/components/cta/CTA";
import { Experiences } from "@/features/profile/components/experiences";
import { Gallery } from "@/features/profile/components/gallery";
import { GitHubContributions } from "@/features/profile/components/github-contributions";
import { HeroIntro } from "@/features/profile/components/hero-intro";
// import { Overview } from "@/features/profile/components/overview";
import { ProfileCover } from "@/features/profile/components/profile-cover";
import { ProfileHeader } from "@/features/profile/components/profile-header";
import { Projects } from "@/features/profile/components/projects";
// import { SocialLinks } from "@/features/profile/components/social-links";
import { TeckStack } from "@/features/profile/components/teck-stack";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="animate-fade-in-blur mx-auto md:max-w-3xl">
        <ProfileCover />
        <ProfileHeader />
        <HeroIntro />
        <GitHubContributions />
        <Separator />

        <TeckStack />
        <Separator />

        <Blog />
        <Separator />

        <Experiences />
        <Separator />

        <Projects />
        <Separator />

        {/* <Awards /> */}
        {/* <Separator /> */}

        <Certifications />
        <Separator />
        <CTA />
        <Separator />
        <Gallery />
        <Separator />
      </div>
    </>
  );
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs(USER.dateCreated).toISOString(),
    dateModified: dayjs().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  };
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn("stripe-divider w-full border-x border-edge", className)}
    />
  );
}
