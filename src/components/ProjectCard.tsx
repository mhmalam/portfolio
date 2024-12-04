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
      <div className="flex h-full flex-col space-y-3">
        <Card className="relative aspect-video w-full overflow-hidden">
          {image && (
            <div className="pointer-events-none">
              <Image
                src={image}
                alt={`${name} Showcase Image`}
                fill
                className={`${imageClassName} object-cover transition-transform duration-300 group-hover:scale-105`}
              />
            </div>
          )}
        </Card>

        <div className="flex flex-1 flex-col space-y-4">
          <div className="space-y-2">
            <CardTitle className="flex items-center justify-between">
                <Link href={href || "#"} target="_blank" className="hover:text-primary">
                <h3 className="text-lg font-bold text-foreground truncate max-w-full">
                  {name}
                </h3>
                </Link>
              {links && links.length > 0 && (
                <div className="flex gap-1.5">
                  {links.toSorted().map((link, idx) => (
                    <Link href={link?.href} key={idx} target="_blank">
                      <Badge
                        className="flex items-center gap-1.5 px-2 py-0.5 text-[10px] transition-colors hover:bg-primary/90"
                      >
                        <Icon name={link.icon} className="size-3" />
                        {link.name}
                      </Badge>
                    </Link>
                  ))}
                </div>
              )}
            </CardTitle>
            <div className="flex-1">
              {/* Apply the custom text color to the description */}
              <Markdown className="prose-sm text-[rgb(123,137,168)] dark:prose-invert">
                {description}
              </Markdown>
            </div>
          </div>

          <div className="mt-auto space-y-3">
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {tags.toSorted().map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="px-1.5 py-0 text-[10px]"
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
