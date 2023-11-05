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
    <div className="bg-black group cursor-pointer h-[400px] p-3 rounded-md justify-normal w-[300px]">
      <div className="w-full h-[60%] relative">
        <Image
          src={prevImage}
          alt={title}
          width={500}
          height={931}
          priority
          className="object-contain w-auto h-auto"
        />
        <div className="absolute md:invisible md:group-hover:visible md:group-hover:-translate-y-2 bottom-0 ease-linear duration-100 translate-y-2 transition-transform right-0">
          <Button size={"icon"} asChild className="rounded-full w-12 h-12">
            <Link href={`/projects/${id}`}>
              <ArrowRightIcon className="w-6 h-6" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm">{description}</p>
        <div className="flex mt-3 flex-row gap-2 items-center flex-wrap">
          {techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        {status ? <Badge className="absolute right-4" variant={"outline"}>{status}</Badge> : null}
      </div>
    </div>
  );
}
