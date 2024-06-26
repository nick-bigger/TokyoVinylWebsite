import { AudioPlayer } from "@/components/AudioPlayer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Carousel } from "@/components/ui/carousel.tsx";

export const Home = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="order-2 w-full p-5 md:w-1/3 lg:w-1/3">
          <Card>
            <CardHeader>
              <CardTitle>Listen</CardTitle>
              <CardDescription>to our demos !</CardDescription>
            </CardHeader>
            <CardContent>
              <AudioPlayer />
            </CardContent>
          </Card>
        </div>
        <div className="order-1 h-fit w-full p-5 md:w-2/3 lg:w-2/3">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Pictures</CardTitle>
              <CardDescription>of us !</CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="m-auto flex flex-col gap-5 px-5">
        <div>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            "10/10. My only complaint is how often I had to wipe away tears from
            such a moving performance."
          </blockquote>
          <p className="mt-2 text-xs font-bold">Rolling Stone Magazine</p>
        </div>
        <div>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            "Tokyo Vinyl is the best band I have ever heard in my life"
          </blockquote>
          <p className="mt-2 text-xs font-bold">Nick's Mom</p>
        </div>
        <div>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            "Petah"
          </blockquote>
          <p className="mt-2 text-xs font-bold">Kevin</p>
        </div>
        <div>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            "olk65y6as"
          </blockquote>
          <p className="mt-2 text-xs font-bold">Francios' Cat</p>
        </div>
        <div>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            "that's not my cat"
          </blockquote>
          <p className="mt-2 text-xs font-bold">Francios</p>
        </div>
      </div>
    </>
  );
};
