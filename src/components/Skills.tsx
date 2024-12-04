import data from "@/data/skills.json";
import { skillsSchema } from "@/lib/schemas";
import Image from "next/image";

export default function Skills() {
	const { skills } = skillsSchema.parse(data);

	return (
		<section className="flex flex-col gap-8">
			<h2 className="title text-2xl sm:text-3xl">skills</h2>
			<div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
				{skills.map((skill) => (
					<div
						key={skill.name}
						className="flex flex-col items-center gap-2 transition-transform hover:scale-110"
					>
						{/* Corrected the image container sizing */}
						<div className="relative w-12 h-12 sm:w-14 sm:h-14">
							<Image
								src={`/icons/${skill.icon}.svg`}
								alt={skill.name}
								width={56}  // Equivalent to w-14
								height={56} // Equivalent to h-14
								className="object-contain p-2"
							/>
						</div>
						<span className="text-center text-sm text-muted-foreground">
							{skill.name}
						</span>
					</div>
				))}
			</div>
		</section>
	);
}
