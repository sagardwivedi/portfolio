import Typewriter from "@/components/type-writer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Home = () => {
  return (
    <div className="base flex min-h-[40rem] flex-row items-center justify-center gap-10">
      <Avatar className="mb-5 h-40 w-40 border-4 border-primary-foreground">
        <AvatarImage
          src="https://github.com/sagardwivedi.png"
          alt="@sagadwivedi"
        />
        <AvatarFallback>SD</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <h1 className="mb-1 text-3xl text-primary">Sagar Dwivedi</h1>
        <Typewriter
          text="Full Stack Developer"
          className="text-xl text-secondary-foreground"
        />
      </div>
    </div>
  );
};

export default Home;
