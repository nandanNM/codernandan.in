import Image from "next/image";
import React from "react";

import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import type { TechStack as TechStackType } from "../types/tech-stack";
import { Panel, PanelHeader, PanelTitle } from "./panel";
import { PanelTitleCopy } from "./panel-title-copy";

const ID = "stack";
const ICON_CDN = "https://assets.codernandan.in/images/tech-stack-icons";

export function TeckStack() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Stack</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="relative [--badge-height:--spacing(6)] [--col-left-width:--spacing(48)]">
        <div
          className="pointer-events-none absolute inset-y-0 left-(--col-left-width) -z-1 w-px bg-[linear-gradient(to_bottom,var(--edge)_4px,transparent_2px)] bg-size-[1px_6px] bg-repeat-y max-sm:hidden"
          aria-hidden
        />

        {Object.entries(groupByCategory(TECH_STACK)).map(
          ([category, items], index) => {
            const categoryId = `${ID}-${category
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "")}`;

            return (
              <div
                key={category}
                className="grid items-start gap-y-2 border-b border-edge py-4 last:border-none sm:grid-cols-[var(--col-left-width)_1fr]"
              >
                <div
                  id={categoryId}
                  className="pl-4 text-sm/(--badge-height) text-muted-foreground"
                >
                  <span
                    className="mr-1.5 font-mono text-muted-foreground/50 select-none"
                    aria-hidden
                  >
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  {category}
                </div>

                <ul
                  aria-labelledby={categoryId}
                  className="flex flex-wrap gap-1.5 px-4"
                >
                  {items.map((item) => {
                    return (
                      <li key={item.key} className="flex">
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={item.title}
                          className="flex h-(--badge-height) items-center justify-center gap-1.25 rounded-full bg-zinc-50/80 px-2 font-mono text-xs text-foreground inset-ring-1 inset-ring-border dark:bg-zinc-900/80"
                        >
                          <TechStackIcon item={item} />
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          }
        )}
      </div>
    </Panel>
  );
}

function TechStackIcon({ item }: { item: TechStackType }) {
  const base = "size-3.5 shrink-0 grayscale";

  if (item.iconUrl) {
    return (
      <Image
        src={item.iconUrl}
        alt=""
        aria-hidden
        width={14}
        height={14}
        className={base}
        unoptimized
      />
    );
  }

  if (item.theme) {
    return (
      <>
        <Image
          src={`${ICON_CDN}/${item.key}-light.svg`}
          alt=""
          aria-hidden
          width={14}
          height={14}
          className={cn(base, "hidden [html.light_&]:block")}
          unoptimized
        />
        <Image
          src={`${ICON_CDN}/${item.key}-dark.svg`}
          alt=""
          aria-hidden
          width={14}
          height={14}
          className={cn(base, "hidden [html.dark_&]:block")}
          unoptimized
        />
      </>
    );
  }

  return (
    <Image
      src={`${ICON_CDN}/${item.key}.svg`}
      alt=""
      aria-hidden
      width={14}
      height={14}
      className={base}
      unoptimized
    />
  );
}

function groupByCategory(
  items: TechStackType[]
): Record<string, TechStackType[]> {
  return items.reduce<Record<string, TechStackType[]>>((acc, item) => {
    for (const category of item.categories) {
      (acc[category] ??= []).push(item);
    }
    return acc;
  }, {});
}
