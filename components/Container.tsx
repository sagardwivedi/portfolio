import { ReactNode } from "react";
import { ModeToggle } from "./theme/theme-toogle";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-6">
      <div className="min-h-[calc(100vh_-_3rem)] relative bg-white shadow-sm dark:shadow-xl border dark:border-secondary dark:bg-neutral-900 flex flex-col gap-y-2 justify-center items-center rounded-sm">
        {children}
        <div className="absolute top-4 right-4 flex flex-row gap-x-2 items-center">
          <p>Theme</p>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Container;
