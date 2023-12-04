import TheOven from "@/assets/TheOven.jpeg";
import Valhalla from "@/assets/Valhalla.jpg";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MapPin } from "lucide-react";

export const Schedule = () => (
  <div className="p-5">
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Schedule
    </h1>
    <h1 className="mt-6 font-bold">December Shows</h1>
    <Separator className="mb-10" />
    <div className="flex flex-wrap gap-2 md:flex-nowrap">
      <div className="min-w-fit">
        <Badge variant="secondary">December 8th</Badge>
      </div>
      <Card className="overflow-hidden">
        <img alt="Swan Dive" src={TheOven} className="max-h-[400px] w-[100%] object-cover transition-all hover:scale-105" />
        <CardHeader>
          <CardTitle>The Oven</CardTitle>
        </CardHeader>
        <CardContent>
          <a className="mb-5 flex text-primary" href="https://maps.apple.com/?address=710%20Red%20River%20St,%20Austin,%20TX%20%2078701,%20United%20States&auid=11000676447021066367&ll=30.268058,-97.736848&lsp=9902&q=Valhalla">
            <MapPin className="mr-2" />
            <p className="text-sm">6910 Shirley Ave, Austin, TX 78752</p>
          </a>
          <ul>
            <li>8:00 - 8:40 Seth Celdrán & Marc Renee</li>
            <li>9:00 - 9:45 teal waves</li>
            <li>🌟10:05 - 10:50 Tokyo Vinyl🌟</li>
            <li>11:10 - 11:55 eyes wide shut</li>
            <li>12:15 - 1:00am the episodes</li>
          </ul>
        </CardContent>
      </Card>
    </div>
    <h1 className="mt-6 font-bold">January Shows</h1>
    <Separator className="mb-10" />
    <div className="flex flex-wrap gap-2 md:flex-nowrap">
      <div className="min-w-fit">
        <Badge variant="secondary">January 11th</Badge>
      </div>
      <Card className="overflow-hidden">
        <img alt="Swan Dive" src={Valhalla} className="max-h-[400px] w-[100%] object-cover transition-all hover:scale-105" />
        <CardHeader>
          <CardTitle>Valhalla</CardTitle>
        </CardHeader>
        <CardContent>
          <a className="mb-5 flex text-primary" href="https://maps.apple.com/?address=710%20Red%20River%20St,%20Austin,%20TX%20%2078701,%20United%20States&auid=11000676447021066367&ll=30.268058,-97.736848&lsp=9902&q=Valhalla">
            <MapPin className="mr-2" />
            <p className="text-sm">710 Red River St Austin, TX 78701</p>
          </a>
          Big show ! Four bands ! Good times !!
        </CardContent>
      </Card>
    </div>
    <div className="mt-20">
      <h1 className="font-bold">Upcoming Shows</h1>
      <Separator className="mb-10" />
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>More to come !!! Check back soon for more dates</CardTitle>
        </CardHeader>
      </Card>
    </div>
  </div>
);
