import dayjs from "dayjs";
import type { ImageProps } from "next/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
import type { Post } from "@/types/blog";

type HeadingTypes = "h2" | "h3" | "h4";

export function PostItem({
  post,
  headingAs,
  imageLoading = "lazy",
  shouldPreloadImage,
}: {
  post: Post;
  headingAs?: HeadingTypes;
  imageLoading?: ImageProps["loading"];
  shouldPreloadImage?: boolean;
}) {
  const Heading = headingAs ?? "h2";

  return (
    <div
      className={cn(
        "group/post relative flex h-full flex-col gap-2 p-2 transition-[background-color] ease-out hover:bg-accent/50",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
    >
      {post.metadata.image && (
        <div className="relative select-none">
          <Image
            className="aspect-1200/630 rounded-xl grayscale transition-[filter] duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] group-hover/post:grayscale-0"
            src={post.metadata.image}
            alt={post.metadata.title}
            width={1200}
            height={630}
            quality={100}
            priority={shouldPreloadImage}
            loading={shouldPreloadImage ? undefined : imageLoading}
            unoptimized
          />

          <div className="pointer-events-none absolute inset-0 rounded-xl inset-ring-1 inset-ring-black/15 dark:inset-ring-white/15" />
        </div>
      )}

      <div className="flex flex-col gap-1 p-2">
        <Heading className="text-lg leading-snug font-medium text-balance">
          <Link
            href={`/blog/${post.slug}`}
            className="underline-offset-4 group-hover/post:underline"
          >
            <span className="absolute inset-0" aria-hidden />
            {post.metadata.title}
          </Link>

          {post.metadata.new && (
            <span className="pointer-events-none ml-2 inline-block size-2 -translate-y-px rounded-full bg-info align-middle">
              <span className="sr-only">New</span>
            </span>
          )}
        </Heading>

        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-sm text-muted-foreground">
            <time dateTime={dayjs(post.metadata.createdAt).toISOString()}>
              {dayjs(post.metadata.createdAt).format("DD.MM.YYYY")}
            </time>
          </dd>
        </dl>
      </div>
    </div>
  );
}
