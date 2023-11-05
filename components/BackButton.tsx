"use client";

import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

import { Button } from "./ui/button";

const Back = () => {
  const router = useRouter();

  return (
    <div className="mb-5">
      <Button onClick={() => router.back()} variant={"secondary"}>
        <ArrowLeftIcon className="mr-2 h-4 w-4" /> <span>Back</span>
      </Button>
    </div>
  );
};

export default Back;
