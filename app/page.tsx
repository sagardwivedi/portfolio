import Typewriter from "@/components/type-writer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-y-5">
        <Avatar className="w-40 border-4 border-primary-foreground h-40">
          <AvatarImage
            src="https://github.com/sagardwivedi.png"
            alt="@sagadwivedi"
          />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <Typewriter text="Sagar Dwivedi" className="text-3xl" />
      </div>
      <Typewriter text="Full Stack Developer" className="text-xl " />
      <div className="flex flex-col max-md:gap-y-5 md:flex-row gap-x-10 mt-10">
        <Button asChild variant={"outline"}>
          <Link href={"/projects"}>Projects</Link>
        </Button>
        <Button asChild variant={"outline"}>
          <Link href={"/me"}>About Me</Link>
        </Button>
        <Button asChild variant={"outline"}>
          <Link href={"/contact"}>Contact Me</Link>
        </Button>
        <Button asChild variant={"outline"}>
          <Link href={"/blog"}>Blog</Link>
        </Button>
      </div>
    </>
  );
};

export default Home;
