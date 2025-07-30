import { Link, useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

import { H1 } from "@/components/Typography";

export const EPK = () => {
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedRight: () => navigate("/", { unstable_viewTransition: true }),
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: true,
  });

  return (
    <div className="relative h-screen w-screen p-10" {...handlers}>
      <Link
        to="/"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-white -rotate-90 origin-left pl-4 z-10"
        unstable_viewTransition
      >
        home
      </Link>
      <H1 className="mb-8 text-right">EPK</H1>
      <p className="font-midnight mb-4 leading-relaxed">
        Tokyo Vinyl is a four-member indie rock band founded in 2023, blending
        the fierce energy of Paramore, the ska-punk edge of No Doubt, the catchy
        hooks of South Arcade, and the gritty style of Arctic Monkeys. The
        band’s writing style leans heavily into a grunge Y2KCore sound, mixing
        raw vocals and heavy guitar riffs with a futuristic, yet nostalgic,
        edge. Their debut single, "PPO," recorded entirely at home, quickly
        broke 1,000 streams and earned a spot on one of Austin's top alternative
        music playlists. Having played at renowned local venues like Valhalla,
        Coral Snake, and Meanwhile Brewery, Tokyo Vinyl has quickly established
        itself in the Austin music scene, known for their electrifying
        performances and immersive live sets that captivate audiences.
      </p>
      <p className="font-midnight leading-relaxed">
        After building momentum with their debut, Tokyo Vinyl took time off from
        performing to dive deep into the studio. The band spent time at The
        Bubble Studios to record three new singles, set to be released on
        October 5th. These upcoming tracks were produced by Chris "Frenchie"
        Smith, a respected name in the industry who has worked with acts such as
        The Dandy Warhols, Jet, and Meat Puppets. Smith’s experience and Tokyo
        Vinyl’s Y2KCore influences come together in this collection, offering a
        dynamic new chapter for the band. With their bold sound and rapidly
        growing fanbase, Tokyo Vinyl is poised to make waves far beyond Austin’s
        indie rock scene.
      </p>
    </div>
  );
};
