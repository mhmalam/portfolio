import { Badge } from "@/components/ui/Badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Project } from "@/lib/schemas";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import Icon from "./Icon";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const { name, href, description, image, tags, links, imageClassName } = project;

  return (
    <div className="group h-full">
      <div className="flex h-full flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-border/80 hover:-translate-y-1">
        {/* Image Section */}
        <Card className="relative aspect-video w-full overflow-hidden border-0 rounded-none">
          {image && (
            <div className="pointer-events-none h-full w-full">
              <Image
                src={image}
                alt={`${name} Showcase Image`}
                fill
                className={`${imageClassName} object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105`}
              />
            </div>
          )}
        </Card>

        {/* Content Section */}
        <div className="flex flex-1 flex-col p-6 space-y-4">
          <div className="space-y-3">
            <div className="space-y-2">
              <Link href={href || "#"} target="_blank" className="hover:text-primary transition-colors">
                <h3 className="text-xl font-bold text-foreground">
                  {name}
                </h3>
              </Link>
              {links && links.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {links.toSorted().map((link, idx) => (
                    <Link href={link?.href} key={idx} target="_blank">
                      <Badge
                        className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] transition-all hover:bg-primary/90 hover:scale-105"
                      >
                        <Icon name={link.icon} className="size-3" />
                        {link.name}
                      </Badge>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="flex-1">
              <Markdown className="prose-sm text-muted-foreground dark:prose-invert leading-relaxed">
                {description}
              </Markdown>
            </div>
          </div>

          {/* Tags Section */}
          <div className="mt-auto pt-2">
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.toSorted().map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="px-2.5 py-1 text-[11px] font-medium hover:bg-secondary/80 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
