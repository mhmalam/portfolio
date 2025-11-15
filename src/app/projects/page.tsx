import Projects from "@/components/Projects";

export default async function ProjectPage() {
  return (
    <article className="flex flex-col gap-12 pb-16 pt-8">
      <h1 className="title text-4xl sm:text-5xl">All Projects</h1>
      <Projects />
    </article>
  );
}
