"use client";

import { Badge } from "@/components/ui/Badge";
import { IconLink } from "@/lib/schemas";
import Link from "next/link";
import { useState } from "react";
import Icon from "./Icon";

interface Props {
  videoId: string;
  name: string;
  tags: string[];
  links: IconLink[];
}

export default function TerminalVideo({ videoId, name, tags, links }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-[2/1] w-full overflow-hidden bg-[#0b0d12]">
      {/* The logo, full size: a terminal window the demo boots inside of */}
      <div className="absolute inset-x-4 bottom-4 top-4 flex flex-col overflow-hidden rounded-xl border border-[#2a303a] bg-[#14171c] shadow-2xl sm:inset-x-6 sm:top-5">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-[#2a303a] px-3 py-1.5">
          <svg width="11" height="11" viewBox="0 0 100 100" aria-hidden="true">
            <polyline
              points="10,30 34,52 10,74"
              fill="none"
              stroke="#8a9099"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polygon points="68,30 92,74 44,74" fill="#f6a821" />
          </svg>
          <span className="font-mono text-[10px] tracking-wide text-[#8a9099]">
            deploy@malam.me ~ demo
          </span>
        </div>
        {/* Screen */}
        <div className="relative flex-1 bg-black">
          {playing ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
              title={`${name} demo video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`Play ${name} demo video`}
              className="absolute inset-0 flex items-center justify-center font-mono text-xs transition-colors hover:bg-white/5 sm:text-sm"
            >
              <span className="text-[#fafaf8]">
                <span className="text-[#8a9099]">$</span> npx deploy demo{" "}
                <span className="-mb-0.5 inline-block h-3.5 w-2 animate-pulse bg-[#f6a821] sm:h-4" />
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Overlay: title + tags, fades away while the demo plays */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-2.5 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 pt-12 transition-opacity duration-300 sm:p-6 ${playing ? "opacity-0" : ""}`}
      >
        <h3 className="text-xl font-bold text-white sm:text-2xl">{name}</h3>
        <div className="flex flex-wrap items-center gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 bg-black/50 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm sm:text-[11px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Links - top right */}
      {links && links.length > 0 && (
        <div
          className={`absolute right-4 top-4 flex flex-wrap justify-end gap-1.5 transition-opacity duration-300 ${playing ? "opacity-0 hover:opacity-100" : ""}`}
        >
          {links.map((link, idx) => (
            <Link href={link.href} key={idx} target="_blank">
              <Badge className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] transition-all hover:scale-105 hover:bg-primary/90">
                <Icon name={link.icon} className="size-3" />
                {link.name}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
