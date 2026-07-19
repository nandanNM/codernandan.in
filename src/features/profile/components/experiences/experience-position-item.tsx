import { differenceInMonths, parse } from "date-fns";
import {
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  InfinityIcon,
} from "lucide-react";
import React from "react";

import { Markdown } from "@/components/markdown";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Tag } from "@/components/ui/tag";
import { Prose } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import type { ExperiencePosition } from "../../types/experiences";
import { ExperienceIcon } from "./experience-position-icon";

export function ExperiencePositionItem({
  position,
}: {
  position: ExperiencePosition;
}) {
  const { start, end } = position.employmentPeriod;
  const isOngoing = !end;
  const duration = formatDuration(start, end);

  return (
    <Collapsible
      defaultOpen={position.isExpanded}
      disabled={!position.description}
      asChild
    >
      <div className="group/experience-position relative">
        <div className="pointer-events-none absolute bottom-0 left-3 hidden size-4 bg-background group-last/experience-position:flex">
          <span className="size-full -translate-y-2.25 rounded-bl-sm border-b border-l" />
        </div>

        <CollapsibleTrigger
          className={cn(
            "group/experience block w-full text-left select-none",
            "relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-1 before:rounded-lg hover:before:bg-accent/50",
            "data-[disabled]:before:content-none"
          )}
        >
          <div className="relative z-1 mb-1 flex items-start gap-3 text-base">
            <div
              className={cn(
                "flex size-6 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground",
                "border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 ring-offset-background",
                "[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              )}
              aria-hidden
            >
              <ExperienceIcon icon={position.icon} />
            </div>

            <h4 className="flex-1 font-medium text-balance">
              {position.title}
            </h4>

            {position.description && (
              <div
                className="shrink-0 text-muted-foreground [&_svg]:size-4"
                aria-hidden
              >
                <ChevronsDownUpIcon className="hidden group-data-[state=open]/experience:block" />
                <ChevronsUpDownIcon className="hidden group-data-[state=closed]/experience:block" />
              </div>
            )}
          </div>

          <dl className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
            {position.employmentType && (
              <>
                <div>
                  <dt className="sr-only">Employment Type</dt>
                  <dd>{position.employmentType}</dd>
                </div>

                <Separator
                  className="data-[orientation=vertical]:h-4"
                  orientation="vertical"
                />
              </>
            )}

            <div>
              <dt className="sr-only">Employment Period</dt>
              <dd className="flex items-center gap-0.5 tabular-nums">
                <span>{start}</span>
                <span className="font-mono">—</span>
                {isOngoing ? (
                  <>
                    <InfinityIcon
                      className="size-4.5 translate-y-[0.5px]"
                      aria-hidden
                    />
                    <span className="sr-only">Present</span>
                  </>
                ) : (
                  <span>{end}</span>
                )}
              </dd>
            </div>

            {duration && (
              <>
                <Separator
                  className="data-[orientation=vertical]:h-4"
                  orientation="vertical"
                />
                <div>
                  <dt className="sr-only">Duration</dt>
                  <dd className="tabular-nums">{duration}</dd>
                </div>
              </>
            )}
          </dl>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          {position.description && (
            <Prose className="pt-3 pb-1 pl-9">
              <Markdown>{position.description}</Markdown>
            </Prose>
          )}
        </CollapsibleContent>

        {Array.isArray(position.skills) && position.skills.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 pt-3 pl-9">
            {position.skills.map((skill, index) => (
              <li key={index} className="flex">
                <Tag>{skill}</Tag>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Collapsible>
  );
}

function formatDuration(start: string, end?: string): string {
  const startHasMonth = start.includes(".");
  const endHasMonth = end ? end.includes(".") : true;

  if (!startHasMonth && end && !endHasMonth) {
    const years = parseInt(end, 10) - parseInt(start, 10);
    if (years <= 0) {
      return "";
    }
    return `${years}y`;
  }

  const startDate = parsePeriodDate(start, "first");
  const endDate = end ? parsePeriodDate(end, "last") : new Date();

  const totalMonths = differenceInMonths(endDate, startDate) + 1;
  if (totalMonths <= 0) {
    return "";
  }

  if (totalMonths < 12) {
    return `${totalMonths}m`;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (months === 0) {
    return `${years}y`;
  }
  return `${years}y ${months}m`;
}

function parsePeriodDate(str: string, fallbackMonth: "first" | "last"): Date {
  if (str.includes(".")) {
    return parse(str, "MM.yyyy", new Date());
  }
  return parse(
    `${fallbackMonth === "last" ? "12" : "01"}.${str}`,
    "MM.yyyy",
    new Date()
  );
}
