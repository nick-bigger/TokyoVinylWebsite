import Freddos from "@/assets/Freddos.jpeg";
import SwanDive from "@/assets/SwanDive.jpg";
import Valhalla from "@/assets/Valhalla.jpg";
import WarrenRecords from "@/assets/WarrenRecords.jpeg";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MapPin } from "lucide-react";

export const Schedule = () => (
  <div className="p-5">
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Schedule
    </h1>
    <h1 className="mt-6 font-bold">October Shows</h1>
    <Separator className="mb-10" />
    <div className="flex flex-wrap gap-2 md:flex-nowrap">
      <div className="min-w-fit">
        <Badge variant="secondary">October 30th</Badge>
      </div>
      <Card className="overflow-hidden">
        <img alt="Swan Dive" src={Freddos} className="max-h-[400px] w-[100%] object-cover transition-all hover:scale-105" />
        <CardHeader>
          <CardTitle>Freddo ATX</CardTitle>
        </CardHeader>
        <CardContent>
          <a className="mb-5 flex text-primary" href="https://maps.apple.com/?address=2336%20S%20Congress%20Ave,%20Austin,%20TX%20%2078704,%20United%20States&auid=16041791617147519326&ll=30.239196,-97.753649&lsp=9902&q=Freddo%20ATX">
            <MapPin className="mr-2" />
            <p className="text-sm">2336 S Congress Ave Austin, TX 78704</p>
          </a>
          Art share and open mic at a beautiful outdoor venue ! What more could you want.
        </CardContent>
      </Card>
    </div>
    <h1 className="mt-6 font-bold">November Shows</h1>
    <Separator className="mb-10" />
    <div className="flex flex-col flex-wrap gap-10 md:flex-nowrap">
      <div className="flex flex-wrap gap-2 md:flex-nowrap">
        <div className="min-w-fit">
          <Badge variant="secondary">November 2nd</Badge>
        </div>
        <Card className="overflow-hidden">
          <img alt="Swan Dive" src={WarrenRecords} className="max-h-[400px] w-[100%] object-cover transition-all hover:scale-105" />
          <CardHeader>
            <CardTitle>Warren Records</CardTitle>
          </CardHeader>
          <CardContent>
            <a className="mb-5 flex text-primary" href="https://maps.apple.com/?address=3505%20Country%20White%20Ln,%20Austin,%20TX%20%2078749,%20United%20States&auid=15105586881333415884&ll=30.221297,-97.826536&lsp=9902&q=Nomadic%20Outpost">
              <MapPin className="mr-2" />
              <p className="text-sm">3505 Country White LN Austin, TX 78749</p>
            </a>
            Another great open mic ! Mixed art forms, should be really dope.
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-wrap gap-2 md:flex-nowrap">
        <div className="min-w-fit">
          <Badge variant="secondary">November TBD</Badge>
        </div>
        <Card className="overflow-hidden">
          <img alt="Swan Dive" src={SwanDive} className="max-h-[400px] w-[100%] object-cover transition-all hover:scale-105" />
          <CardHeader>
            <CardTitle>Swan Dive</CardTitle>
          </CardHeader>
          <CardContent>
            <a className="mb-5 flex text-primary" href="https://maps.apple.com/?address=615%20Red%20River%20St,%20Austin,%20TX%20%2078701,%20United%20States&auid=12858396508321334113&ll=30.267126,-97.736584&lsp=9902&q=Swan%20Dive">
              <MapPin className="mr-2" />
              <p className="text-sm">615 Red River St Austin, TX 78701</p>
            </a>
            Come see us play with our friends Wicker !
          </CardContent>
        </Card>
      </div>
    </div>
    <h1 className="mt-6 font-bold">December Shows</h1>
    <Separator className="mb-10" />
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Nothin' yet</CardTitle>
      </CardHeader>
    </Card>
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
