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
              <CardDescription>to our music !</CardDescription>
            </CardHeader>
            <CardContent>
              <AudioPlayer />
            </CardContent>
          </Card>
        </div>
        <div className="order-1 w-full p-5 md:w-2/3 lg:w-2/3">
          <Card>
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
    </>
  );
}
