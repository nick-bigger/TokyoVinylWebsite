import SwanDive from "@/assets/SwanDive.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const Schedule = () => (
  <div className="p-5">
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Schedule
    </h1>
    <h1 className="mt-6 font-bold">October Shows</h1>
    <Separator className="mb-10" />
    <div className="flex flex-wrap gap-2 md:flex-nowrap">
      <p className="text-sm">October TBD</p>
      <Card className="overflow-hidden">
        <img alt="Swan Dive" src={SwanDive} className="max-h-[400px] w-[100%] object-cover transition-all hover:scale-105" />
        <CardHeader>
          <CardTitle>Swan Dive</CardTitle>
        </CardHeader>
        <CardContent>
          Come see us play with our friends Wicker !
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
