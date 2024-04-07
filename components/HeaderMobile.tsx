'use client';

import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Each, Show, ShowWhen } from 'sagar-utility-components';

import { Button } from '@/components/ui/button';
import { navs } from '@/lib/constantData';
import { cn } from '@/lib/utils';

export function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <Button
        onClick={openMenu}
        size="icon"
        variant="outline"
        className="right-4 top-4 z-50 rounded-full bg-white text-gray-900 md:hidden"
        aria-label="Menu Button"
      >
        <MenuIcon className="h-6 w-6" />
      </Button>
      <Show>
        <ShowWhen isTrue={isOpen}>
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={closeMenu}
            aria-hidden="true"
          />
        </ShowWhen>
      </Show>
      <div
        className={cn(
          'fixed inset-x-0 top-0 z-50 w-full transform p-4 transition-all duration-500 ease-in-out',
          isOpen ? 'translate-y-0' : '-translate-y-full',
        )}
      >
        <div className="rounded-md border border-white/40 bg-gray-950 p-4">
          <div className="flex justify-end">
            <Button
              onClick={closeMenu}
              variant="ghost"
              size="icon"
              className="text-white"
            >
              <XIcon className="h-6 w-6" />
            </Button>
          </div>
          <nav className="mt-4 flex flex-col">
            <Each
              of={navs}
              render={(nav) => (
                <Button
                  key={nav.text}
                  className="mb-2 font-sans text-base"
                  asChild
                  variant="link"
                  onClick={closeMenu}
                >
                  <Link href={nav.href}>{nav.text}</Link>
                </Button>
              )}
            />
          </nav>
        </div>
      </div>
    </>
  );
}
