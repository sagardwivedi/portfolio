import { Project } from './types/projectType';

export const projects: Project[] = [
  {
    id: '1',
    title: 'TaskVista',
    description: 'My take on kanban style task management app.',
    prevImage: '/taskvista.png',
    techStack: ['NextJS', 'Supabase', 'TailwidCSS'],
    demoLink: 'https://taskvista.vercel.app/',
    gitRepo: 'https://github.com/sagardwivedi/kanban',
    status: 'WIP',
  },
  {
    id: '2',
    title: 'DevJunction',
    description: 'A fully-functional link-sharing app for developers!',
    prevImage: '/devjunction.png',
    techStack: ['NextJS', 'TailwindCSS', 'shadcn/ui', 'supabase'],
    demoLink: 'https://devjunction.vercel.app/',
    gitRepo: 'https://github.com/sagardwivedi/devjunction',
    status: 'WIP',
  },
  {
    id: '3',
    title: 'Huddle',
    description: 'A landing page with a single introductory section',
    prevImage: '/huddle.png',
    techStack: ['NextJS', 'TailwindCSS'],
    demoLink: 'https://huddle-three-pi.vercel.app/',
    gitRepo:
      'https://github.com/sagardwivedi/FrontendMentor/tree/master/huddle_landing_intro',
  },
  {
    id: '4',
    title: 'FQuiz',
    description: 'A Frontend Quizz App',
    prevImage: '/fquizz.png',
    techStack: ['NextJS', 'TailwindCSS', 'shadcn/ui', 'zustand'],
    demoLink: 'https://fquiz-eight.vercel.app/',
    gitRepo: 'https://github.com/sagardwivedi/f-quiz',
  },
];
