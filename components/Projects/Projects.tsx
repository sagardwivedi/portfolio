import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  return (
    <div className="flex max-md:flex-col flex-row items-center divide-y gap-10">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
