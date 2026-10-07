import { Experience } from "@/lib/schemas";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Icon from "./Icon";

interface Props {
  experience: Experience;
  isFirst?: boolean;
  isLast?: boolean;
}

export default function TimelineItem({ experience, isFirst, isLast }: Props) {
  const { name, href, title, location, start, end, description, links } =
    experience;

  const current = !end;
  const range = `${start} – ${end ?? "Present"}`;

  const dateClass =
    "text-xs font-medium uppercase tracking-wider text-muted-foreground";

  return (
    <li className="grid grid-cols-[1rem_1fr] gap-x-4 sm:grid-cols-[8rem_1rem_1fr] sm:gap-x-5">
      {/* Date column (desktop) */}
      <div className="hidden pt-[3px] sm:block">
        <time className={cn(dateClass, "flex flex-col gap-0.5 whitespace-nowrap")}>
          <span className={cn(current && "text-foreground/80")}>{start}</span>
          <span className="text-muted-foreground/60">{end ?? "Present"}</span>
        </time>
      </div>

      {/* Rail: connecting line + node */}
      <div className="relative flex justify-center" aria-hidden="true">
        <span
          className={cn(
            "absolute bottom-0 top-0 w-px bg-border",
            isFirst && "top-2.5",
            isLast && "bg-gradient-to-b from-border via-border to-transparent",
          )}
        />
        {current ? (
          <span className="relative mt-[5px] flex size-2.5 items-center justify-center">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-foreground/40 motion-reduce:hidden" />
            <span className="relative size-2.5 rounded-full bg-foreground" />
          </span>
        ) : (
          <span className="relative mt-[5px] size-2.5 rounded-full border-[1.5px] border-muted-foreground bg-background" />
        )}
      </div>

      {/* Content */}
      <div className={cn("flex flex-col", !isLast && "pb-10")}>
        <time className={cn(dateClass, "sm:hidden")}>{range}</time>
        <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground sm:-mt-0.5">
          {title}
        </h3>
        <p className="mt-0.5 text-sm text-muted-foreground">
          {href ? (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {name}
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
          ) : (
            <span className="font-medium text-foreground/80">{name}</span>
          )}
          {location && (
            <>
              <span className="mx-1.5 text-border" aria-hidden="true">
                ·
              </span>
              {location}
            </>
          )}
        </p>

        {description && (
          <div className="mt-3 space-y-2.5">
            {description.map((desc, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-muted-foreground"
              >
                {desc}
              </p>
            ))}
          </div>
        )}

        {links && links.length > 0 && (
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
              >
                <Icon name={link.icon} aria-hidden="true" className="size-3.5" />
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
