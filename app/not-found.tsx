import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="base flex-col justify-center flex items-center min-h-screen">
      <h2>No Such Page</h2>
      <Button asChild variant={"link"}>
        <Link href={"/"}>Go Home</Link>
      </Button>
    </div>
  );
}
