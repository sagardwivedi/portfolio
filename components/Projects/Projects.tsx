import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  return (
    <div className="flex flex-col items-center divide-y gap-10">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
