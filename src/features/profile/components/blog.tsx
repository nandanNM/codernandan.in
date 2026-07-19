import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import { PostItem } from "@/components/post-item";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/data/blog";

import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "./panel";
import { PanelTitleCopy } from "./panel-title-copy";

const ID = "blog";

export function Blog() {
  const allPosts = getAllPosts();

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Blog</a>
          <PanelTitleSup>({allPosts.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {allPosts.slice(0, 6).map((post) => (
            <PostItem key={post.slug} post={post} headingAs="h3" />
          ))}
        </div>
      </div>

      <div className="screen-line-before flex justify-center py-2">
        <Button
          className="gap-2 rounded-[9px] bg-[#494d57] pr-2.5 pl-3 text-white ring-1 ring-border ring-offset-2 ring-offset-background hover:bg-[#494d57] dark:bg-[#494d57] dark:hover:bg-[#494d57]"
          size="sm"
          asChild
        >
          <Link href="/blog">
            All posts
            <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </Panel>
  );
}
