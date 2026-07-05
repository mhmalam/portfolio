import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/Button";
import {
  ArrowRightIcon,
  FileText,
  MapPin
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  return (
    <article className="flex flex-col gap-20 pb-16">
      {/* Hero Section */}
      <section className="relative pt-12 pb-8">
        <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <h1 className="title text-5xl sm:text-6xl mb-5">
              Mohammed Alam
            </h1>
            <p className="mb-4 text-lg font-semibold sm:whitespace-nowrap sm:text-xl">
              Software Engineer | CS @ <span className="text-foreground whitespace-nowrap">Columbia University</span>
            </p>
            <p className="mb-8 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4" aria-hidden="true" />
              New York, NY
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
          <Image
            src="/alam.jpg"
            alt="Mohammed Alam"
            width={175}
            height={175}
            priority
            className="size-28 flex-shrink-0 rounded-full border-2 border-border object-cover shadow-md sm:size-40"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="scroll-mt-20">
        <h2 className="title text-3xl sm:text-4xl mb-10">My Stack</h2>
        <Skills />
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
        <Projects limit={4} />
      </section>
    </article>
  );
}
