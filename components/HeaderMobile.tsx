"use client";

import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";

import { navs } from "@/lib/constantData";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

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
        className="rounded md:hidden"
        aria-label="Menu Button"
      >
        <HamburgerMenuIcon className="h-6 w-6" />
      </Button>
      {isOpen && (
        <div className="absolute inset-0 z-40 min-h-screen bg-black/50" />
      )}
      <div
        className={cn(
          isOpen
            ? `block duration-300 ease-in animate-in fade-in-0 slide-in-from-top-10`
            : `invisible duration-300 ease-out animate-out fade-out-0 slide-out-to-top-10`,
          "base absolute inset-x-0 top-0 z-50 m-4 h-auto items-center justify-center p-5",
        )}
      >
        <div className="flex flex-col">
          <div className="flex justify-end">
            <Button onClick={closeMenu} variant="ghost" size="icon">
              <Cross1Icon className="h-6 w-6" />
            </Button>
          </div>
          {navs.map((nav, index) => (
            <Button
              key={index}
              className="font-sans text-base"
              asChild
              variant="link"
            >
              <Link onClick={() => setTimeout(closeMenu, 300)} href={nav.href}>
                {nav.text}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}
