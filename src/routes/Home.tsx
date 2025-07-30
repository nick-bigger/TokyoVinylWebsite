import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden p-4">
      <Link
        to="music"
        className="absolute top-4 text-2xl text-white z-10"
        unstable_viewTransition
      >
        music
      </Link>
      <Link
        to="epk"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white rotate-90 origin-right pr-4 z-10 text-2xl"
        unstable_viewTransition
      >
        epk
      </Link>
      <Link
        to="schedule"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-white -rotate-90 origin-left pl-4 z-10"
        unstable_viewTransition
      >
        schedule
      </Link>
      <Link
        to="social"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl text-white z-10"
        unstable_viewTransition
      >
        social
      </Link>
      <div className="flex justify-center items-center h-full w-full">
        <p className="text-[80px] text-red-600 leading-none sm:text-[200px] rotate-3 font-blackout text-center">
          tokyo vinyl
        </p>
      </div>
    </div>
  );
};
