import data from "@/data/skills.json";
import { skillsSchema } from "@/lib/schemas";
import Image from "next/image";

const CATEGORY_ORDER: { key: string[]; label: string }[] = [
	{ key: ["Languages"], label: "Languages" },
	{ key: ["Frontend"], label: "Frontend" },
	{ key: ["Backend"], label: "Backend" },
	{ key: ["Cloud", "Tools"], label: "Cloud & DevOps" },
];

export default function Skills() {
	const { skills } = skillsSchema.parse(data);

	return (
		<div className="flex flex-col gap-5">
			{CATEGORY_ORDER.map(({ key, label }) => {
				const items = skills.filter((skill) => key.includes(skill.category));
				if (items.length === 0) return null;

				return (
					<div
						key={label}
						className="flex flex-col gap-3 sm:flex-row sm:items-baseline"
					>
						<h3 className="w-32 shrink-0 text-sm font-medium text-muted-foreground">
							{label}
						</h3>
						<ul className="flex flex-wrap gap-2">
							{items.map((skill) => (
								<li
									key={skill.name}
									className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium transition-colors hover:border-foreground/25 hover:bg-accent"
								>
									<Image
										src={`/icons/${skill.icon}.svg`}
										alt=""
										aria-hidden="true"
										width={18}
										height={18}
										className="size-[18px] object-contain"
									/>
									{skill.name}
								</li>
							))}
						</ul>
					</div>
				);
			})}
		</div>
	);
}
