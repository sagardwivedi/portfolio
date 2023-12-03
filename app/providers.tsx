"use client";

import { Next13ProgressBar } from "next13-progressbar";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Next13ProgressBar
        height="4px"
        color="green"
        options={{ showSpinner: false }}
        showOnShallow
      />
    </>
  );
};

export default Providers;
