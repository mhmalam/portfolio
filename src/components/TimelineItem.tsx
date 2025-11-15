import { Experience } from "@/lib/schemas";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { Badge } from "./ui/Badge";
import Icon from "./Icon";

interface Props {
  experience: Experience;
}

export default function TimelineItem({ experience }: Props) {
  const { name, href, title, logo, start, end, description, links } =
    experience;

  return (
    <li className="relative flex gap-6 pb-10 last:pb-0">
      {/* Left side - Logo and line */}
      <div className="relative flex flex-col items-center flex-shrink-0">
        <Link
          href={href}
          target="_blank"
          className="relative z-10 flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-110"
        >
          <Avatar className="size-14 border-2 shadow-sm bg-white dark:bg-white/10">
            <AvatarImage
              src={logo}
              alt={name}
              className="object-contain p-2"
            />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
        </Link>
        {/* Vertical line */}
        <div className="absolute top-14 bottom-0 w-[2px] bg-border"></div>
      </div>
      
      {/* Right side - Content */}
      <div className="flex-1 pt-1">
        <h2 className="text-base font-normal text-muted-foreground mb-1.5">{name}</h2>
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        {start && (
          <time className="text-sm text-muted-foreground block mb-4">
            {start} - {end ? end : "Present"}
          </time>
        )}
        {description && (
          <div className="space-y-3">
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
              <Link href={link.href} key={idx}>
                <Badge title={link.name} className="flex gap-1.5 transition-all hover:scale-105">
                  <Icon name={link.icon} aria-hidden="true" className="size-3" />
                  {link.name}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
