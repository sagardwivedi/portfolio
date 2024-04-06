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
    <div className="flex flex-col overflow-hidden rounded-md bg-black">
      <Image
        src={prevImage}
        alt={title}
        className="rounded-md"
        width={700}
        height={700}
        loader={customLoader}
      />

      <div className="flex flex-row flex-wrap items-center justify-between p-5">
        <div>
          <div className="flex flex-row items-center gap-2">
            <h2 className="text-xl font-semibold text-primary md:text-3xl">
              {title}
            </h2>
            {status && <Badge variant={'outline'}>{status}</Badge>}
          </div>
          <p className="text-secondary-foreground">{description}</p>
          <div className="mt-2 flex flex-row flex-wrap gap-2">
            {techStack.map((i) => (
              <Badge key={i}>{i}</Badge>
            ))}
          </div>
        </div>
        <div className="mt-5 flex gap-4">
          <Button
            className="group bg-secondary text-secondary-foreground"
            asChild
            variant={'link'}
          >
            <Link href={demoLink}>
              Live
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            className="group bg-primary text-primary-foreground"
            asChild
            variant={'link'}
          >
            <Link href={gitRepo}>
              Github
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
