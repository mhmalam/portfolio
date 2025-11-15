import data from "@/data/skills.json";
import { skillsSchema } from "@/lib/schemas";
import Image from "next/image";

export default function Skills() {
	const { skills } = skillsSchema.parse(data);

	return (
		<div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
			{skills.map((skill, index) => (
				<div
					key={skill.name}
					className="group relative flex flex-col items-center gap-3 p-4 transition-all duration-300 hover:scale-110"
					style={{
						animationDelay: `${index * 50}ms`,
						animation: 'fadeInUp 0.5s ease-out forwards',
						opacity: 0
					}}
				>
					<div className="relative w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 group-hover:scale-110">
						<Image
							src={`/icons/${skill.icon}.svg`}
							alt={skill.name}
							width={56}
							height={56}
							className="object-contain"
						/>
					</div>
					<span className="text-center text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
						{skill.name}
					</span>
				</div>
			))}
		</div>
	);
}
