import { Experience } from "@/lib/schemas";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/Badge";
import Icon from "./Icon";

interface Props {
  experience: Experience;
}

export default function TimelineItem({ experience }: Props) {
  const { name, href, title, location, start, end, description, links } =
    experience;

  return (
    <li className="relative border-l-2 border-border pb-10 pl-6 last:pb-0">
      {href ? (
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-0.5 text-sm font-semibold text-foreground underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground"
        >
          {name}
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </Link>
      ) : (
        <span className="text-sm text-muted-foreground">{name}</span>
      )}
      <h3 className="mt-1 text-xl font-bold text-foreground">{title}</h3>
      {start && (
        <time className="mt-1 block text-sm text-muted-foreground">
          {start} - {end ? end : "Present"}
        </time>
      )}
      {location && (
        <p className="text-sm text-muted-foreground/75">{location}</p>
      )}
      {description && (
        <div className="mt-3 space-y-3">
          {description.map((desc, i) => (
            <p key={i} className="text-sm leading-relaxed text-foreground/90">
              {desc}
            </p>
          ))}
        </div>
      )}
      {links && links.length > 0 && (
        <div className="mt-4 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx} target="_blank">
              <Badge title={link.name} className="flex gap-1.5 transition-all hover:scale-105">
                <Icon name={link.icon} aria-hidden="true" className="size-3" />
                {link.name}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
