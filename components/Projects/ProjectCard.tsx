import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from '@/lib/types/projectType';
import customLoader from '@/loader';

interface ProjectCardProps extends Project {}

export function ProjectCard({
  description,
  title,
  prevImage,
  techStack,
  status,
  demoLink,
  gitRepo,
}: ProjectCardProps) {
  return (
    <div className="overflow-hidden  rounded-md">
      <div className="relative h-64 w-full">
        <Image
          src={prevImage.src}
          alt={title}
          fill
          className="rounded-t-md object-cover"
          loader={customLoader}
          priority={prevImage.priority}
        />
      </div>
      <div className="bg-gray-900 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            {title}
          </h2>
          {status && <Badge>{status}</Badge>}
        </div>
        <p className="mt-2 text-gray-200">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-gray-300">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-4 flex space-x-4">
          <LinkButton link={demoLink} text="Live Demo" />
          <LinkButton link={gitRepo} text="Github Repo" />
        </div>
      </div>
    </div>
  );
}

function LinkButton({ link, text }: { link: string; text: string }) {
  return (
    <Button
      asChild
      variant="default"
      className="group rounded-2xl transition-colors duration-300"
    >
      <Link
        href={link}
        className="flex items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
        <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
      </Link>
    </Button>
  );
}
