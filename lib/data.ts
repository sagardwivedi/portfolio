import { Route } from "next";

export interface Project {
  id: number;
  title: string;
  description: string;
  prevImage: string;
  techStack: string[];
  demoLink: Route<string>;
  gitRepo: Route<string>;
  status?: "WIP";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "DevJunction",
    description: "A fully-functional link-sharing app for developers!",
    prevImage: "/devjunction.png",
    techStack: ["NextJS", "TailwindCSS", "shadcn/ui", "supabase"],
    demoLink: "https://devjunction.vercel.app/",
    gitRepo: "https://github.com/sagardwivedi/devjunction",
    status: "WIP",
  },
  {
    id: 2,
    title: "Huddle",
    description: "A landing page with a single introductory section",
    prevImage: "/huddle.png",
    techStack: ["NextJS", "TailwindCSS"],
    demoLink: "https://huddle-three-pi.vercel.app/",
    gitRepo:
      "https://github.com/sagardwivedi/FrontendMentor/tree/master/huddle_landing_intro",
  },
];
