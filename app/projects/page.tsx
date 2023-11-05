import Projects from "@/components/Projects/Projects";

export default function ProjectPage() {
  return (
    <div className="base py-8 px-4">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl">My Projects</h1>
      </div>
      <div className="mt-10">
        <Projects />
      </div>
    </div>
  );
}
