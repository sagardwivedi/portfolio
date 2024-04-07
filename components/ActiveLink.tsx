'use client';

import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UrlObject } from 'url';

import { cn } from '@/lib/utils';

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
        'inline-block rounded-lg px-4 py-2 transition-colors duration-300',
        isActive
          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-blue-500 hover:to-purple-500'
          : 'hover:bg-primary',
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {text}
    </Link>
  );
}
