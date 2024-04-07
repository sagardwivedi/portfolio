import {
  Book,
  CheckCircle,
  HandHeart,
  Lightbulb,
  User,
  Wrench,
} from 'lucide-react';
import { type Metadata } from 'next';

import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Me',
};

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-primary">
            Meet Sagar Dwivedi
          </h1>
          <p className="text-lg text-gray-400">
            A Full-Stack Developer Passionate about Crafting Beautiful Web
            Experiences
          </p>
        </div>

        <section className="mb-12">
          <h2 className="mb-4 flex items-center text-2xl font-bold text-primary">
            <User className="mr-2" /> Who I Am
          </h2>
          <p className="mb-6 text-lg text-gray-400">
            Hello! I&apos;m a full-stack developer on a mission to make a mark
            in the exciting world of web development. While my professional
            journey is just beginning, my commitment to learning and growing is
            steadfast.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 flex items-center text-2xl font-bold text-primary">
            <Wrench className="mr-2" /> Skills & Technologies
          </h2>
          <div className="mb-6 flex flex-wrap">
            <Badge className="mb-2 mr-2">Next.js</Badge>
            <Badge className="mb-2 mr-2">React.js</Badge>
            <Badge className="mb-2 mr-2">Tailwind CSS</Badge>
            <Badge className="mb-2 mr-2">Python</Badge>
            <Badge className="mb-2 mr-2">Node.js</Badge>
            <Badge className="mb-2 mr-2">FastAPI</Badge>
          </div>
          <p className="mb-6 text-lg text-gray-400">
            I&apos;m a passionate explorer of the digital realm, eager to master
            the art of creating web applications that are not only functional
            but elegant. My journey has led me to acquire skills in the
            technologies listed above, and I&apos;m dedicated to expanding my
            knowledge.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 flex items-center text-2xl font-bold text-primary">
            <CheckCircle className="mr-2" /> Why Choose Me
          </h2>
          <ul className="list-inside list-disc">
            <li className="mb-4 text-lg text-gray-400">
              <span className="font-medium text-primary">
                Eagerness to Learn:
              </span>{' '}
              I approach every challenge with enthusiasm and a strong
              willingness to learn and improve.
            </li>
            <li className="mb-4 text-lg text-gray-400">
              <span className="font-medium text-primary">Tech Skills:</span> I
              bring proficiency in Next.js, React.js, Tailwind CSS, Python,
              Node.js, and FastAPI to the table.
            </li>
            <li className="mb-4 text-lg text-gray-400">
              <span className="font-medium text-primary">
                Problem-Solving Mindset:
              </span>{' '}
              I tackle coding challenges with a creative and analytical
              approach, always seeking the best solutions.
            </li>
            <li className="mb-4 text-lg text-gray-400">
              <span className="font-medium text-primary">
                Passion for Web Development:
              </span>{' '}
              My enthusiasm for web development fuels my continuous quest for
              excellence.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 flex items-center text-2xl font-bold text-primary">
            <Lightbulb className="mr-2" /> What Drives Me
          </h2>
          <p className="mb-6 text-lg text-gray-400">
            I&apos;m driven by the endless possibilities of the digital world.
            Every line of code I write is an opportunity to turn innovative
            ideas into tangible solutions. My work is a reflection of my
            commitment to creating efficient and user-friendly web applications.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 flex items-center text-2xl font-bold text-primary">
            <HandHeart className="mr-2" /> Let&apos;s Collaborate
          </h2>
          <p className="mb-6 text-lg text-gray-400">
            I&apos;m eager to connect with industry professionals, mentors, and
            potential collaborators. Whether you have a project idea, a
            question, or just want to explore the vast possibilities of the
            digital world, please don&apos;t hesitate to get in touch.
            Let&apos;s embark on this learning journey together.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 flex items-center text-2xl font-bold text-primary">
            <Book className="mr-2" /> Beyond the Keyboard
          </h2>
          <p className="mb-6 text-lg text-gray-400">
            When I&apos;m not immersed in the world of code, you can find me
            reading manga, light novels, and watching anime. A well-rounded life
            keeps me inspired and creative.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Page;
