import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Project } from "@/lib/data";
import { Badge } from "../ui/badge";

export function ProjectCard({
  description,
  id,
  title,
  prevImage,
  techStack,
  status,
}: Omit<Project, "demoLink" | "gitRepo">) {
  return (
    <div className="group h-[400px] w-[300px] cursor-pointer justify-normal rounded-md bg-black p-3">
      <div className="relative h-[60%] w-full">
        <Image src={prevImage} alt={title} width={300} height={240} priority />
        <div className="absolute bottom-0 right-0 translate-y-2 transition-transform duration-100 ease-linear md:invisible md:group-hover:visible md:group-hover:-translate-y-2">
          <Button
            aria-label="nav-button"
            size={"icon"}
            asChild
            className="h-12 w-12 rounded-full"
          >
            <Link href={`/projects/${id}`}>
              <ArrowRightIcon className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
        <div className="mt-3 flex flex-row flex-wrap items-center gap-2">
          {techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        {status ? (
          <Badge className="absolute right-4" variant={"outline"}>
            {status}
          </Badge>
        ) : null}
      </div>
    </div>
  );
}
