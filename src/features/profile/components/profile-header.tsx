import { FlipSentences } from "@/components/flip-sentences";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/data/user";
import { cn } from "@/lib/utils";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

        {/* Flag of Viet Nam */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 200"
          className="absolute top-0 -left-px h-8 sm:h-9"
        >
          <rect width="300" height="200" fill="#FFFFFF" />
          <rect width="300" height="66.6667" y="0" fill="#FF9933" />
          <rect width="300" height="66.6667" y="133.3333" fill="#138808" />
          <g transform="translate(150,100)" fill="none" stroke="#000080">
            <circle r="24" strokeWidth="2" />
            <circle r="3" strokeWidth="2" fill="#000080" />
            <defs>
              <line
                id="spoke"
                x1="0"
                y1="3"
                x2="0"
                y2="-24"
                stroke="#000080"
                strokeWidth="1.5"
              />
            </defs>
            <g>
              {Array.from({ length: 24 }).map((_, i) => (
                <use key={i} href="#spoke" transform={`rotate(${i * 15})`} />
              ))}
            </g>
          </g>
        </svg>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-3xl font-semibold">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.6em] translate-y-px text-info select-none" />
            </SimpleTooltip>
            {USER.namePronunciationUrl && (
              <>
                &nbsp;
                <PronounceMyName
                  className="translate-y-px"
                  namePronunciationUrl={USER.namePronunciationUrl}
                />
              </>
            )}
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}
