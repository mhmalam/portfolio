import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/Button";
import {
  ArrowRightIcon,
  FileText
} from "lucide-react";
import Link from "next/link";

export default async function Home() {

  return (
    <article className="flex flex-col gap-20 pb-16">
      {/* Hero Section */}
      <section className="relative pt-12 pb-8">
        <div className="flex flex-col">
          <h1 className="title text-5xl sm:text-6xl mb-5">
            Mohammed Alam
          </h1>
          <p className="text-xl sm:text-2xl font-semibold mb-8">
            Software Engineer | CS @  <span className="text-foreground whitespace-nowrap">Columbia University</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/resume.pdf" target="_blank">
              <Button className="shadow-lg hover:shadow-xl transition-shadow">
                <span className="font-semibold">View Resume</span>
                <FileText className="ml-2 size-4" />
              </Button>
            </Link>
            <Socials />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="scroll-mt-20">
        <Experience />
      </section>

      {/* Projects Section */}
      <section className="scroll-mt-20">
        <div className="flex sm:items-end sm:justify-between gap-4 mb-10">
          <h2 className="title text-3xl sm:text-4xl">Featured Projects</h2>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="View All Projects"
          />
        </div>
        <Projects limit={2} />
      </section>

      {/* Skills Section */}
      <section className="scroll-mt-20">
        <h2 className="title text-3xl sm:text-4xl mb-10">My Stack</h2>
        <Skills />
      </section>
    </article>
  );
}