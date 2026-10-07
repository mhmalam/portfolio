"use client";

import { useState } from "react";

interface Props {
  videoId: string;
  name: string;
}

export default function TerminalVideo({ videoId, name }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-[#0b0d12]">
      {/* The logo, full size: a terminal window the demo boots inside of */}
      <div className="absolute inset-x-4 bottom-4 top-4 flex flex-col overflow-hidden rounded-lg border border-[#2a303a] bg-[#14171c] shadow-2xl">
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
              className="absolute inset-0 flex items-center justify-center font-mono text-xs transition-colors hover:bg-white/5"
            >
              <span className="text-[#fafaf8]">
                <span className="text-[#8a9099]">$</span> npx deploy demo{" "}
                <span className="-mb-0.5 inline-block h-3.5 w-2 animate-pulse bg-[#f6a821]" />
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
