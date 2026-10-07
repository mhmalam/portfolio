import { Experience } from "@/lib/schemas";
import TimelineItem from "./TimelineItem";

interface Props {
  experience: Experience[];
}

export default function Timeline({ experience }: Props) {
  return (
    <ol className="flex flex-col">
      {experience.map((exp, id) => (
        <TimelineItem
          key={id}
          experience={exp}
          isFirst={id === 0}
          isLast={id === experience.length - 1}
        />
      ))}
    </ol>
  );
}
