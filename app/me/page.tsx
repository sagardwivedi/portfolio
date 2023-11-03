import Link from "next/link";

import Next from "@/components/Icons/next";
import ReactLogo from "@/components/Icons/react";
import TailwindCSSLogo from "@/components/Icons/tailwindcss";
import { Badge } from "@/components/ui/badge";

const page = () => {
  return (
    <div className="base p-8">
      <div className="flex items-center justify-center text-lg">
        <div className="flex flex-col text-left lg:flex-grow">
          <h1 className="mb-8 text-center text-3xl font-medium text-primary sm:text-4xl">
            About Me
          </h1>
          <div className="mx-auto flex max-w-5xl flex-col">
            <div className="h-min">
              <p className="mb-3 leading-relaxed">
                Hello! I&apos;m{" "}
                <span className="text-xl text-primary underline decoration-primary underline-offset-2">
                  Sagar Dwivedi
                </span>
                , an full-stack developer on a mission to make a mark in the
                exciting world of web development. While my professional journey
                is just beginning, my commitment to learning and growing is
                steadfast.
              </p>
            </div>

            <div>
              <article className="mb-3 leading-relaxed">
                <p className="mb-2 text-xl font-semibold text-primary">
                  Who I Am:
                </p>
                <div>
                  I&apos;m a passionate explorer of the digital realm, eager to
                  master the art of creating web applications that are not only
                  functional but elegant. My journey has led me to acquire
                  skills in
                  <Badge className="rounded">
                    <Next />
                  </Badge>
                  ,
                  <Badge className="rounded">
                    <ReactLogo />
                  </Badge>
                  ,
                  <Badge className="rounded">
                    <TailwindCSSLogo />
                  </Badge>
                  , <Badge>Python</Badge>, <Badge>Node.js</Badge>, and FastAPI,
                  and I&apos;m dedicated to expanding my knowledge.
                </div>
              </article>
              <article className="mb-3 leading-relaxed">
                <p className="mb-2 text-xl font-semibold text-primary">
                  Why Choose Me:
                </p>
                <ul className="list-disc space-y-2">
                  <li className="ml-10 w-[80%]">
                    <span className="block font-serif font-medium text-primary">
                      Eagerness to Learn:
                    </span>
                    I approach every challenge with enthusiasm and a strong
                    willingness to learn and improve.
                  </li>
                  <li className="ml-10 w-[80%]">
                    <span className="block font-serif font-medium text-primary">
                      Tech Skills:
                    </span>
                    I bring proficiency in Next.js, React.js, Tailwind CSS,
                    Python, Node.js, and FastAPI to the table.
                  </li>
                  <li className="ml-10 w-[80%]">
                    <span className="block font-serif font-medium text-primary">
                      Problem-Solving Mindset:
                    </span>
                    I tackle coding challenges with a creative and analytical
                    approach, always seeking the best solutions.
                  </li>
                  <li className="ml-10 w-[80%]">
                    <span className="block font-serif font-medium text-primary">
                      Passion for Web Development:
                    </span>
                    My enthusiasm for web development fuels my continuous quest
                    for excellence.
                  </li>
                </ul>
              </article>
              <article className="mb-3 leading-relaxed">
                <p className="mb-2 text-xl font-semibold text-primary">
                  What Drives Me:
                </p>
                <p>
                  I&apos;m driven by the endless possibilities of the digital
                  world. Every line of code I write is an opportunity to turn
                  innovative ideas into tangible solutions. My work is a
                  reflection of my commitment to creating efficient and
                  user-friendly web applications.
                </p>
              </article>

              <article className="mb-3 leading-relaxed">
                <p className="mb-2 text-xl font-semibold text-primary">
                  Let&apos;s Collaborate:
                </p>
                <p>
                  I&apos;m eager to connect with industry professionals,
                  mentors, and potential collaborators. Whether you have a
                  project idea, a question, or just want to explore the vast
                  possibilities of the digital world, please don&apos;t hesitate
                  to get in touch through
                  <Link className="underline " href={"/contact"}>
                    Contact Me
                  </Link>
                  . Let&apos;s embark on this learning journey together.
                </p>
              </article>
              <article className="mb-3 leading-relaxed">
                <p className="mb-2 text-xl font-semibold text-primary">
                  Beyond the Keyboard:
                </p>
                <p>
                  When I&apos;m not immersed in the world of code, you can find
                  me [Your Hobbies/Interests Outside of Development]. A
                  well-rounded life keeps me inspired and creative.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
