import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-6">
      <div className="h-[700px] relative bg-white shadow-md dark:shadow-xl border dark:border-secondary dark:bg-neutral-900 flex flex-col gap-y-2 justify-center items-center rounded-sm">
        {children}
      </div>
    </div>
  );
};

export default Container;
