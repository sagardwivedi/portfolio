import { Route } from 'next';

export interface Project {
  id: string;
  title: string;
  description: string;
  prevImage: {
    src: string;
    priority?: boolean;
  };
  techStack: string[];
  demoLink: Route<string>;
  gitRepo: Route<string>;
  status?: 'WIP';
}
