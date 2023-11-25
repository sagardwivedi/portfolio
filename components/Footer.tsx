import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="base mt-6 py-4">
      <div className="flex flex-row items-center justify-between px-6">
        <p>Created By: Sagar Dwivedi</p>
        <Button asChild variant={"ghost"} size={"icon"}>
          <Link href={"https://github.com/sagardwivedi"}>
            <GitHubLogoIcon className="h-7 w-7" />
          </Link>
        </Button>
      </div>
    </footer>
  );
}
