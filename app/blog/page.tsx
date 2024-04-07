import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
};

const page = () => {
  return (
    <div className="p-8 text-center">
      <h1>Work In Progress</h1>
    </div>
  );
};

export default page;
