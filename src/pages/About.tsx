import Signature from "../assets/signature.png";

export const About = () => (
  <div className="p-5">
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      About Us
    </h1>
    <p className="leading-9 [&:not(:first-child)]:mt-6">
      In a small bedroom in South Austin, TX, a singer and two guitarists sat swapping songs.
      We'd listen and play along when we could - jamming to songs from bands like The Strokes,
      The Smiths, Paramore, and The Arctic Monkeys. It wasn't glamorous, but it sure was fun ! And
      we wanted a band that felt like that. So a few months, a name, and a couple new members later,
      all five of us are psyched to be here as Tokyo Vinyl !
    </p>
    <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      Who We Are
    </h2>
    <p className="leading-9 [&:not(:first-child)]:mt-6">
    You know, it's usually not easy to pick a sound, but we all liked the same bands, so we just wrote what
    we knew and let our styles melt together. We wanted our songs to be fun for other musicians to listen
    to, but easy enough that non-music nerds could vibe to. And, most important, we wanted people dancing
    at our gigs ! Add a dash of “loudquietloud” (Nat came up with that), some light, relatable trauma, and
    a handful of distortion to the mix, and we created some tasty (lol) jams that we really want to share.
    </p>
    <p className="leading-9 [&:not(:first-child)]:mt-6">
    Mostly, we just want to get on stage and have fun; and, if we can make it fun for all of y'all while
    we're there then that's way better.
    </p>
    <p className="leading-9 [&:not(:first-child)]:mt-6">
    Of course, if along the way, we can change the course of musical history and become
    the biggest band of all time... then that's pretty cool, too ;)
    </p>
    <p className="leading-9 [&:not(:first-child)]:mt-6">
      with love and yee-hawesomeness (Nick came up with that one),
    </p>
    <div className="flex justify-end">
      <img className="h-52" src={Signature} />
    </div>
  </div>
);
