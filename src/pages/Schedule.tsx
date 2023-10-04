import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert.tsx";
import { Music } from "lucide-react";

export const Schedule = () => (
  <div className="m-auto mt-10 flex flex-col gap-5 p-5">
    <Alert>
      <Music className="h-4 w-4" />
      <AlertTitle>09/23 - Soiled Dove</AlertTitle>
      <AlertDescription>Here is the concert description !</AlertDescription>
    </Alert>
    <Alert>
      <Music className="h-4 w-4" />
      <AlertTitle>10/05 - Mike's</AlertTitle>
      <AlertDescription>Here is the concert description !</AlertDescription>
    </Alert>
    <Alert>
      <Music className="h-4 w-4" />
      <AlertTitle>10/07 - The Blue Piano Lounge</AlertTitle>
      <AlertDescription>Here is the concert description !</AlertDescription>
    </Alert>
    <Alert>
      <Music className="h-4 w-4" />
      <AlertTitle>11/12 - Tony's BBQ</AlertTitle>
      <AlertDescription>Here is the concert description !</AlertDescription>
    </Alert>
  </div>
);
