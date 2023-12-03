"use client";

import { cn } from "@/lib/utils";
import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UrlObject } from "url";

interface ActiveLinkProps {
  href: UrlObject | Route<string>;
  text: string;
}

export default function ActiveLink({ href, text }: ActiveLinkProps) {
  const path = usePathname();

  const isActive = path === href;

  return (
    <Link
      href={href}
      className={cn(
        isActive ? "bg-primary block p-2 text-white rounded-[4px]" : "p-2",
        "transition-colors duration-300"
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {text}
    </Link>
  );
}
