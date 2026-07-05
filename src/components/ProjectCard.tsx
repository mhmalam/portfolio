import { Badge } from "@/components/ui/Badge";
import { Project } from "@/lib/schemas";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const { name, description, image, tags, links, imageClassName } = project;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative aspect-[2/1] w-full overflow-hidden">
        {image && imageClassName?.includes("object-contain") && (
          <Image
            src={image}
            alt=""
            aria-hidden="true"
            fill
            className="scale-110 object-cover opacity-50 blur-2xl"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={`${name} Showcase Image`}
            fill
            className={`${imageClassName} transition-transform duration-500 group-hover:scale-105`}
          />
        )}
        {/* Legibility gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

        {/* Overlay: title + tags */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2.5 p-5 sm:p-6">
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
          <div className="absolute right-4 top-4 flex flex-wrap justify-end gap-1.5">
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

      {/* Full description below the image */}
      <p className="p-5 text-sm leading-relaxed text-muted-foreground sm:px-6">
        {description}
      </p>
    </div>
  );
}
