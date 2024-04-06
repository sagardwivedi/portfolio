import { Route } from 'next';

export interface Project {
  id: string;
  title: string;
  description: string;
  prevImage: string;
  techStack: string[];
  demoLink: Route<string>;
  gitRepo: Route<string>;
  status?: 'WIP';
}
