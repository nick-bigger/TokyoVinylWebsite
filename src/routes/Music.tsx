import { Link, useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

import { H1 } from "@/components/Typography";

export const Music = () => {
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedUp: () => navigate("/", { unstable_viewTransition: true }),
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: true,
  });

  return (
    <div className="relative h-screen w-screen p-10" {...handlers}>
      <Link
        to="/"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl text-white z-10"
        unstable_viewTransition
      >
        home
      </Link>
      <H1 className="mb-8">Music</H1>
    </div>
  );
};
