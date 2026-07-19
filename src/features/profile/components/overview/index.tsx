import {
  LinkIcon,
  MapPinIcon,
  MarsIcon,
  NonBinaryIcon,
  VenusIcon,
} from "lucide-react";

import { USER } from "@/data/user";
import { urlToName } from "@/utils/url";

import { Panel, PanelContent } from "../panel";
import { CurrentLocalTimeItem } from "./current-local-time-item";
import { EmailItem } from "./email-item";
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";
import { JobItem } from "./job-item";
import { PhoneItem } from "./phone-item";

export function Overview() {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="relative grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
        {USER.jobs.map((job, index) => {
          return (
            <JobItem
              key={index}
              title={job.title}
              company={job.company}
              website={job.website}
            />
          );
        })}

        <IntroItem>
          <IntroItemIcon>
            <MapPinIcon />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink
              className="font-normal"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.address)}`}
              aria-label={`Location: ${USER.address}`}
            >
              {USER.address}
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>

        <CurrentLocalTimeItem timeZone={USER.timeZone} />

        <PhoneItem phoneNumber={USER.phoneNumber} />

        <EmailItem email={USER.email} />

        <IntroItem>
          <IntroItemIcon>
            <LinkIcon />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink
              className="font-normal"
              href={USER.website}
              aria-label={`Personal website: ${urlToName(USER.website)}`}
            >
              {urlToName(USER.website)}
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>

        <IntroItem>
          <IntroItemIcon>{getGenderIcon(USER.gender)}</IntroItemIcon>
          <IntroItemContent aria-label={`Pronouns: ${USER.pronouns}`}>
            {USER.pronouns}
          </IntroItemContent>
        </IntroItem>

        <div
          className="pointer-events-none absolute top-px bottom-0 left-1/2 -z-1 w-px -translate-x-2.25 bg-[linear-gradient(to_bottom,var(--edge)_4px,transparent_2px)] bg-size-[1px_6px] bg-repeat-y max-sm:hidden"
          aria-hidden
        />
      </PanelContent>
    </Panel>
  );
}

function getGenderIcon(gender: string) {
  switch (gender) {
    case "female":
      return <VenusIcon />;
    case "non-binary":
      return <NonBinaryIcon />;
    default:
      return <MarsIcon />;
  }
}
