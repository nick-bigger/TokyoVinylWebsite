import { Link, useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

export const Home = () => {
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedRight: () =>
      navigate("/schedule", { unstable_viewTransition: true }),
    onSwipedLeft: () => navigate("/epk", { unstable_viewTransition: true }),
    onSwipedUp: () => navigate("/social", { unstable_viewTransition: true }),
    onSwipedDown: () => navigate("/music", { unstable_viewTransition: true }),
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: true,
  });

  return (
    <div
      className="relative h-screen w-screen flex items-center justify-center overflow-hidden p-4"
      {...handlers}
    >
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
        <p className="text-[80px] select-none text-red-600 leading-none sm:text-[200px] rotate-3 font-blackout text-center">
          tokyo vinyl
        </p>
      </div>
    </div>
  );
};
