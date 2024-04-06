import Typewriter from '@/components/type-writer';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
};

const page = () => {
  return (
    <div className="p-8 text-center">
      <Typewriter text="Work in progress" />
    </div>
  );
};

export default page;
