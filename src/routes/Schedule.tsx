import { Link, useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

import { H1 } from "@/components/Typography";

export const Schedule = () => {
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedLeft: () => navigate("/", { unstable_viewTransition: true }),
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: true,
  });

  return (
    <div className="relative h-screen w-screen p-10" {...handlers}>
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
