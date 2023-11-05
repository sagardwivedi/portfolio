import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  return (
    <div className="flex flex-col gap-10 sm:flex-row items-center">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
