"use client";

import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";

export function Nav({
  items,
  activeId,
  className,
}: {
  items: NavItem[];
  activeId?: string | null;
  className?: string;
}) {
  const navRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [dot, setDot] = useState<{ x: number; visible: boolean }>({
    x: 0,
    visible: false,
  });

  const activeHref =
    items.find(({ href }) =>
      href === "/"
        ? activeId === "/"
        : activeId === href || activeId?.startsWith(href)
    )?.href ?? null;

  const targetHref = hovered ?? activeHref;

  const moveDot = useCallback(() => {
    const nav = navRef.current;
    if (!nav) return;

    const el = targetHref
      ? nav.querySelector<HTMLElement>(`[data-nav-href="${targetHref}"]`)
      : null;

    if (!el) {
      setDot((prev) => ({ ...prev, visible: false }));
      return;
    }

    setDot({ x: el.offsetLeft + el.offsetWidth / 2, visible: true });
  }, [targetHref]);

  useEffect(() => {
    moveDot();
    window.addEventListener("resize", moveDot);
    return () => window.removeEventListener("resize", moveDot);
  }, [moveDot]);

  return (
    <nav
      ref={navRef}
      className={cn("relative flex items-center gap-4", className)}
      onMouseLeave={() => setHovered(null)}
    >
      {items.map(({ title, href }) => {
        const active =
          activeId === href || (href !== "/" && activeId?.startsWith(href));

        return (
          <NavItem
            key={href}
            href={href}
            active={active}
            data-nav-href={href}
            onMouseEnter={() => setHovered(href)}
          >
            {title}
          </NavItem>
        );
      })}

      <span
        aria-hidden
        className="pointer-events-none absolute top-[calc(100%+3px)] left-0 size-1 rounded-full bg-foreground transition-[transform,opacity] duration-300 ease-out"
        style={{
          transform: `translateX(calc(${dot.x}px - 50%))`,
          opacity: dot.visible ? 1 : 0,
        }}
      />
    </nav>
  );
}

export function NavItem({
  active,
  ...props
}: React.ComponentProps<typeof Link> & {
  active?: boolean;
}) {
  return (
    <Link
      className={cn(
        "font-mono text-sm font-medium text-muted-foreground transition-all duration-300",
        active && "text-foreground"
      )}
      {...props}
    />
  );
}
