import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="base min-h-[600px] flex justify-center items-center">
      <div className="text-center">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Button asChild>
          <Link href="/projects">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
