import Typewriter from "@/components/type-writer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Home = () => {
  return (
    <div className="base flex min-h-[40rem] flex-col items-center justify-center">
      <Avatar className="mb-5 h-40 w-40 border-4 border-primary-foreground">
        <AvatarImage
          src="https://github.com/sagardwivedi.png"
          alt="@sagadwivedi"
        />
        <AvatarFallback>SD</AvatarFallback>
      </Avatar>
      <Typewriter text="Sagar Dwivedi" className="text-3xl" />
      <Typewriter text="Full Stack Developer" className="text-xl " />
    </div>
  );
};

export default Home;
