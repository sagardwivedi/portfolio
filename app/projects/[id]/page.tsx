import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjectById } from "@/lib/utils";
import Back from "@/components/BackButton";

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="base p-2 md:p-8">
      <Back />
      <Image
        src={project.prevImage}
        alt={`${project.title}`}
        width={1220}
        height={931}
        loading="lazy"
        className="rounded-md drop-shadow-md"
      />
      <div className="flex flex-col items-start justify-between space-y-5 md:flex-row">
        <div>
          <div className="mt-5 space-y-1">
            <h1 className="font-sans text-2xl md:text-4xl">{project.title}</h1>
            <p>{project.description}</p>
          </div>
          <div className="mt-3 flex flex-row flex-wrap items-center gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant={"secondary"}>
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-x-4 max-md:gap-y-5 md:flex-row md:items-center">
          <Button asChild variant={"default"}>
            <div className="space-x-2">
              <Link
                target="_blank"
                href={project.demoLink}
                className="hover:underline"
              >
                Live
              </Link>
              <ArrowRightIcon className="h-5 w-5" />
            </div>
          </Button>
          <Button asChild variant={"secondary"}>
            <div className="space-x-2">
              <Link
                target="_blank"
                href={project.gitRepo}
                className="hover:underline"
              >
                GitHub
              </Link>
              <ArrowRightIcon className="h-5 w-5" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
