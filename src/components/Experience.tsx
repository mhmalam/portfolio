import careerData from "@/data/career.json";
import { careerSchema } from "@/lib/schemas";
import Timeline from "./Timeline";

export default function Experience() {
  const career = careerSchema.parse(careerData).career;

  return (
    <div className="flex flex-col gap-10">
      <h2 className="title text-3xl sm:text-4xl">Experience</h2>
      <Timeline experience={career}></Timeline>
    </div>
  );
}
