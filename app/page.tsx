import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Home = () => {
  return (
    <div className="flex h-[499px] items-center justify-center">
      <div className="flex max-w-lg flex-col items-center justify-center gap-10 rounded-lg p-10">
        <Avatar className="h-40 w-40 overflow-hidden rounded-full border-4 border-blue-400">
          <AvatarImage
            src="https://github.com/sagardwivedi.png"
            alt="@sagadwivedi"
            className="h-full w-full object-cover"
          />
          <AvatarFallback className="flex items-center justify-center text-2xl font-bold text-blue-400">
            SD
          </AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h1 className="text-4xl font-bold">Sagar Dwivedi</h1>
          <p className="text-xl">Full Stack Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
