import {FileRoute} from '@tanstack/react-router'
import {Carousel} from "@/components/ui/carousel.tsx";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";

export const route = new FileRoute('/').createRoute({
  component: () => {
    return (
      <>
        <div className="flex flex-wrap">
          <div className="order-2 w-full md:w-1/3 lg:w-1/3 p-5">
            <Card>
              <CardHeader>
                <CardTitle>Listen</CardTitle>
                <CardDescription>to our music !</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-5 flex-col items-center">
                  <iframe
                    allow="autoplay *; encrypted-media *;"
                    height="152"
                    style={{width: '100%', overflow: 'hidden', background: 'transparent', borderRadius: "6px"}}
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src="https://embed.music.apple.com/us/album/is-this-it/266376953"
                  ></iframe>
                  <iframe
                    className="rounded-lg"
                    src="https://open.spotify.com/embed/album/2k8KgmDp9oHrmu0MIj4XDE?utm_source=generator"
                    width="100%"
                    height="152"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="order-1 w-full md:w-2/3 lg:w-2/3 p-5">
            <Card>
              <CardHeader>
                <CardTitle>Pictures</CardTitle>
                <CardDescription>of us !</CardDescription>
              </CardHeader>
              <CardContent>
                <Carousel/>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    )
  },
})