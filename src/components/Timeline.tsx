import { Experience } from "@/lib/schemas";
import TimelineItem from "./TimelineItem";

interface Props {
  experience: Experience[];
}

export default function Timeline({ experience }: Props) {
  return (
    <ul>
      {experience.map((exp, id) => (
        <TimelineItem key={id} experience={exp} />
      ))}
    </ul>
  );
}
