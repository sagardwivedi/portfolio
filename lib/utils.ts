import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { Project, projects } from "./data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id.toString() === id);
}
