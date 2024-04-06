import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2>No Such Page</h2>
      <Button asChild variant={'link'}>
        <Link href={'/'}>Go Home</Link>
      </Button>
    </div>
  );
}
