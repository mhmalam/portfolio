import Projects from "@/components/Projects";

export default async function ProjectPage() {
  return (
    <article className="flex flex-col gap-12 pb-16 pt-8">
      <div className="flex flex-col gap-4">
        <h1 className="title text-4xl sm:text-5xl">All Projects</h1>
        <p className="max-w-xl leading-relaxed text-muted-foreground">
          A selection of things I&apos;ve built — from products serving millions
          of users to hackathon winners and hardware experiments.
        </p>
      </div>
      <Projects />
    </article>
  );
}
