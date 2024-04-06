import Projects from '@/components/Projects/Projects';

import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project',
};

export default function ProjectPage() {
  return (
    <div className="px-4 py-8">
      <Projects />
    </div>
  );
}
