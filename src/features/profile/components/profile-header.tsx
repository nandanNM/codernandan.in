"use client";

import * as motion from "motion/react-m";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { FlipSentences } from "@/components/flip-sentences";
import { Icons } from "@/components/icons";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { VisitorCount } from "@/components/visitor-count";
import { USER } from "@/data/user";
import soundManager from "@/lib/sound-manager";
import { cn } from "@/lib/utils";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

const GLITCH_SOUND_URL =
  "https://assets.codernandan.in/audio/ui-sounds/glitch.wav";
const GLITCH_DURATION = 700;
const GLITCH_SWAP_AT = 280;

function AvatarImage({
  avatar,
  priority,
}: {
  avatar: (typeof USER.avatars)[number];
  priority?: boolean;
}) {
  return (
    <Image
      className="size-full object-cover object-top brightness-100 transition-[filter] duration-500 ease-out dark:brightness-[0.78] dark:contrast-[0.97]"
      style={
        avatar.zoom
          ? {
              transform: `scale(${avatar.zoom})`,
              transformOrigin: avatar.origin,
            }
          : undefined
      }
      src={avatar.src}
      alt={`${USER.displayName}'s avatar`}
      width={224 * Math.ceil(avatar.zoom ?? 1)}
      height={224 * Math.ceil(avatar.zoom ?? 1)}
      quality={90}
      priority={priority}
    />
  );
}

export function ProfileHeader() {
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [glitching, setGlitching] = useState(false);
  const glitchTimeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  const toggleAvatar = useCallback(() => {
    if (glitchTimeouts.current.length > 0) return; // already glitching

    soundManager.playAudio(GLITCH_SOUND_URL);
    setGlitching(true);

    glitchTimeouts.current = [
      setTimeout(() => {
        setAvatarIndex((index) => (index + 1) % USER.avatars.length);
      }, GLITCH_SWAP_AT),
      setTimeout(() => {
        setGlitching(false);
        glitchTimeouts.current = [];
      }, GLITCH_DURATION),
    ];
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "p") return;
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;

      const target = e.target as HTMLElement;
      if (
        target.isContentEditable ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
      ) {
        return;
      }

      e.preventDefault();
      toggleAvatar();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [toggleAvatar]);

  useEffect(() => {
    const timeouts = glitchTimeouts.current;
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  const activeAvatar = USER.avatars[avatarIndex];

  return (
    <div className="screen-line-after flex items-center gap-4 border-x border-edge p-4 sm:gap-6">
      <div
        className={cn(
          "relative size-24 shrink-0 overflow-hidden rounded-2xl ring-1 ring-border select-none sm:size-28",
          glitching && "avatar-glitch-base"
        )}
      >
        {USER.avatars.map((avatar, index) => (
          <motion.div
            key={avatar.src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: index === avatarIndex ? 1 : 0 }}
            transition={{ duration: 0.1 }}
          >
            <AvatarImage avatar={avatar} priority={index === 0} />
          </motion.div>
        ))}

        {glitching && (
          <>
            <div className="avatar-glitch-layer avatar-glitch-r" aria-hidden>
              <AvatarImage avatar={activeAvatar} />
            </div>
            <div className="avatar-glitch-layer avatar-glitch-c" aria-hidden>
              <AvatarImage avatar={activeAvatar} />
            </div>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1">
        {USER.avatars.length > 1 && (
          <SimpleTooltip
            content={
              <span className="flex items-center gap-1.5">
                Toggle Avatar
                <kbd className="inline-flex h-4 min-w-4 items-center justify-center rounded-sm bg-primary-foreground/20 px-1 font-sans text-[11px] font-medium">
                  P
                </kbd>
              </span>
            }
          >
            <button
              className="mb-1 flex size-5 cursor-pointer items-center justify-center self-start text-muted-foreground transition-[color,scale] select-none hover:text-foreground active:scale-90"
              aria-label="Toggle avatar"
              onClick={toggleAvatar}
            >
              <Icons.contrast
                className={cn(
                  "size-4.5 transition-transform duration-500 ease-out",
                  avatarIndex % 2 === 1 && "rotate-180"
                )}
              />
            </button>
          </SimpleTooltip>
        )}

        <h1 className="flex items-center text-2xl font-semibold sm:text-3xl">
          {USER.displayName}
          &nbsp;
          <SimpleTooltip content="Verified">
            <VerifiedIcon className="size-[0.6em] translate-y-px text-foreground select-none" />
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

        <div className="text-muted-foreground">
          <FlipSentences sentences={USER.flipSentences} />
        </div>
      </div>

      <div className="flex flex-col items-end self-start">
        <VisitorCount />
      </div>
    </div>
  );
}
