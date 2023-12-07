import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

import { Project } from "@/lib/data";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function ProjectCard({
  description,
  title,
  prevImage,
  techStack,
  status,
  demoLink,
  gitRepo,
}: Project) {
  return (
    <div className="flex flex-col rounded-md overflow-hidden bg-black">
      <Image
        src={prevImage}
        alt={title}
        priority
        width={700}
        className="rounded-md"
        height={700}
      />
      <div className="flex flex-row items-center flex-wrap justify-between p-5">
        <div>
          <div className="flex flex-row items-center gap-2">
            <h2 className="text-primary font-semibold md:text-3xl text-xl">
              {title}
            </h2>
            {status && <Badge variant={"outline"}>{status}</Badge>}
          </div>
          <p className="text-secondary-foreground">{description}</p>
          <div className="flex flex-row flex-wrap gap-2 mt-2">
            {techStack.map((i) => (
              <Badge key={i}>{i}</Badge>
            ))}
          </div>
        </div>
        <div className="flex mt-5 gap-4">
          <Button
            className="group bg-secondary text-secondary-foreground"
            asChild
            variant={"link"}
          >
            <Link href={demoLink}>
              Live
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            className="group bg-primary text-primary-foreground"
            asChild
            variant={"link"}
          >
            <Link href={gitRepo}>
              Github
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
