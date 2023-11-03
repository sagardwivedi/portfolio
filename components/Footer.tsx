import { navs } from "@/lib/constantData";
import Link from "next/link";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <header className="mt-6 flex flex-row items-center justify-between rounded-sm border bg-white py-2 shadow-sm dark:border-secondary dark:bg-neutral-900 dark:shadow-xl">
      <div></div>
      <div className="flex flex-row">
        {navs.map((nav, index) => (
          <Button
            key={index}
            className="font-sans text-base"
            asChild
            variant={"link"}
          >
            <Link href={nav.href}>{nav.text}</Link>
          </Button>
        ))}
      </div>
    </header>
  );
}
