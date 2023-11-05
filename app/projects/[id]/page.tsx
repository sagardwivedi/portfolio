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
        priority
        className="w-auto h-auto drop-shadow-md rounded-md"
      />
      <div className="space-y-5 flex flex-col md:flex-row justify-between items-start">
        <div>
          <div className="mt-5 space-y-1">
            <h1 className="text-2xl md:text-4xl font-sans">{project.title}</h1>
            <p>{project.description}</p>
          </div>
          <div className="flex mt-3 flex-row gap-2 items-center flex-wrap">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant={"secondary"}>
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex max-md:gap-y-5 md:items-center gap-x-4 flex-col md:flex-row">
          <Button asChild variant={"default"}>
            <div className="space-x-2">
              <Link
                target="_blank"
                href={project.demoLink}
                className="hover:underline"
              >
                Live
              </Link>
              <ArrowRightIcon className="w-5 h-5" />
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
              <ArrowRightIcon className="w-5 h-5" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
