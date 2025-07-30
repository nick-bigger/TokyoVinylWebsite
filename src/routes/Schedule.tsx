import { Link } from "react-router-dom";

import { H1 } from "@/components/Typography";

export const Schedule = () => {
  return (
    <div className="relative h-screen w-screen p-10">
      <Link
        to="/"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white rotate-90 origin-right pr-4 z-10 text-2xl"
        unstable_viewTransition
      >
        home
      </Link>
      <H1 className="mb-8">Schedule</H1>
    </div>
  );
};
