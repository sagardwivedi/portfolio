import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
