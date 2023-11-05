import Projects from "@/components/Projects/Projects";

export default function ProjectPage() {
  return (
    <div className="base px-4 py-8">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl">My Projects</h1>
      </div>
      <div className="mt-10">
        <Projects />
      </div>
    </div>
  );
}
