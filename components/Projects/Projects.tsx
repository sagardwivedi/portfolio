import { projects } from '@/lib/data';
import { ProjectCard } from './ProjectCard';

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
