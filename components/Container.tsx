import { ReactNode } from "react";
import { ModeToggle } from "./theme/theme-toogle";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-6">
      <div className="relative flex min-h-[calc(100vh_-_3rem)] flex-col items-center justify-center gap-y-2 rounded-sm border bg-white shadow-sm dark:border-secondary dark:bg-neutral-900 dark:shadow-xl">
        {children}
        <div className="absolute right-4 top-4 flex flex-row items-center gap-x-2">
          <p>Theme</p>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Container;
