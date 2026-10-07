import { Project } from "@/lib/schemas";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import TerminalVideo from "./TerminalVideo";

interface Props {
  project: Project;
}

function youtubeId(url: string) {
  return url.match(/(?:youtu\.be\/|[?&]v=)([\w-]{11})/)?.[1];
}

export function ProjectCard({ project }: Props) {
  const { name, description, image, video, tags, links, imageClassName } =
    project;

  const videoId = video ? youtubeId(video) : undefined;

  const tagList = (
    <ul className="flex flex-wrap items-center gap-1.5" aria-label="Technologies">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-border bg-background/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
        >
          {tag}
        </li>
      ))}
    </ul>
  );

  const linkList = links.length > 0 && (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
      {links.map((link, idx) => (
        <Link
          href={link.href}
          key={idx}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
        >
          <Icon name={link.icon} className="size-3.5" aria-hidden="true" />
          {link.name}
        </Link>
      ))}
    </div>
  );

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-foreground/30">
      {/* Media */}
      {videoId ? (
        <TerminalVideo videoId={videoId} name={name} />
      ) : (
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-muted/40">
          {image && imageClassName?.includes("object-contain") && (
            <Image
              src={image}
              alt=""
              aria-hidden="true"
              fill
              className="scale-110 object-cover opacity-40 blur-2xl"
            />
          )}
          {image && (
            <Image
              src={image}
              alt={`${name} showcase`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className={cn(
                imageClassName,
                "transition-transform duration-500 group-hover:scale-[1.03]",
              )}
            />
          )}
        </div>
      )}

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <h3 className="text-base font-semibold tracking-tight text-foreground">
          {name}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="mt-auto flex flex-col gap-3 pt-1">
          {tagList}
          {linkList}
        </div>
      </div>
    </article>
  );
}
