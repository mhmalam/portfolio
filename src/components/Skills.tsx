import data from "@/data/skills.json";
import { skillsSchema, type Skill } from "@/lib/schemas";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ROWS: string[][] = [
	["Languages", "Frontend"],
	["Backend", "Cloud", "Tools"],
];

function MarqueeRow({ items, reverse }: { items: Skill[]; reverse?: boolean }) {
	return (
		<div className="marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
			<ul
				className={cn(
					"marquee-track flex w-max items-center",
					reverse && "reverse",
				)}
			>
				{[0, 1].map((copy) =>
					items.map((skill) => (
						<li
							key={`${copy}-${skill.name}`}
							aria-hidden={copy === 1 || undefined}
							className="flex items-center gap-2.5 pr-10"
						>
							<span className="flex size-9 items-center justify-center rounded-full border border-border bg-card">
								<Image
									src={`/icons/${skill.icon}.svg`}
									alt=""
									aria-hidden="true"
									width={18}
									height={18}
									className="size-[18px] object-contain"
								/>
							</span>
							<span className="whitespace-nowrap text-sm font-semibold text-foreground/90">
								{skill.name}
							</span>
						</li>
					)),
				)}
			</ul>
		</div>
	);
}

export default function Skills() {
	const { skills } = skillsSchema.parse(data);

	return (
		<div className="flex flex-col gap-6">
			{ROWS.map((categories, i) => (
				<MarqueeRow
					key={i}
					items={skills.filter((skill) => categories.includes(skill.category))}
					reverse={i % 2 === 1}
				/>
			))}
		</div>
	);
}
