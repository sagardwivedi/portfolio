import { cn } from '@/lib/utils';
import { Button } from './button';

export function Logo({ className }: { className?: string }) {
  return (
    <div>
      <Button
        variant={'ghost'}
        className={cn('text-4xl hover:bg-transparent', className)}
      >
        SD
      </Button>
    </div>
  );
}
