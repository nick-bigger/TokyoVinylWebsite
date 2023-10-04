import Signature from "../assets/signature.png";

export const About = () => (
  <div className="p-5">
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      About Us
    </h1>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      Welcome to the world of Tokyo Vinyl, where musical artistry meets indie
      and alternative in a symphony of sonic creativity. We're a collective of
      five passionate musicians, each bringing our unique talents to the
      forefront of our sound.
    </p>
    <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      Who We Are
    </h2>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      Our music is a fusion of genres, a kaleidoscope of indie and alternative
      elements, garnished with hints from various musical sub-genres. We don't
      stick to one formula; instead, we explore the vast landscape of musical
      possibilities. You'll hear echoes of our influences, but we're never
      confined by them.
    </p>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      What sets Tokyo Vinyl apart is our commitment to creating music that
      appeals to both the music theory nerds who love dissecting complex
      compositions and the average listener who simply wants to feel the groove.
      We're complex but accessible, offering pop-infused indie that always
      provides something to chew on.
    </p>
    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
      Meet the band
    </h3>
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>
        Natalie: The enchanting voice that guides you through our musical
        journey, with lyrics that resonate and melodies that linger.
      </li>
      <li>
        Nick and Kevin: The guitar wizards who weave intricate riffs and chords
        into our sonic tapestry, channeling the spirit of bands like The
        Strokes, Arctic Monkeys, and The Smiths.
      </li>
      <li>
        Francios: The heartbeat of our rhythm, with a bass groove that'll move
        your soul.
      </li>
      <li>
        Karen: The rhythmic powerhouse behind the drum kit, providing the
        heartbeat of our music and the driving force behind our sound.
      </li>
    </ul>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      Whether you're a fan of soulful vocals, intricate guitar work, pulsating
      basslines, or dynamic drumming, there's something for everyone in our
      music. Join us on this musical adventure where every note is a story, and
      every song is an invitation to dive deep into the world of Tokyo Vinyl.
    </p>
    <div className="flex justify-end">
      <img className="h-52" src={Signature} />
    </div>
  </div>
);
