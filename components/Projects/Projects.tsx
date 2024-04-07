import { Each } from 'sagar-utility-components';

import { projects } from '@/lib/data';
import { ProjectCard } from './ProjectCard';

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      <Each
        of={projects}
        render={(item) => <ProjectCard key={item.id} {...item} />}
      />
    </div>
  );
}
