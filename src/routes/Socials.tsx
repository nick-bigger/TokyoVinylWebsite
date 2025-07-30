import { Link } from "react-router-dom";

import { H1 } from "@/components/Typography";

export const Socials = () => {
  return (
    <div className="relative h-screen w-screen p-10">
      <Link
        to="/"
        className="absolute top-4 left-[50%] translate-x-[-50%] text-2xl text-white z-10"
        unstable_viewTransition
      >
        home
      </Link>
      <H1 className="mb-8">Socials</H1>
    </div>
  );
};
