import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";

const formSchema = z.object({
  subject: z.string().min(1, {
    message: "Subject cannot be empty.",
  }),
  message: z.string().min(1, {
    message: "Message cannot be empty.",
  }),
});

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export const Contact = () => {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    window.open(
      `mailto:tokyovinylband@gmail.com?subject=${values.subject}&body=${values.message}`,
    );

    wait().then(() => setOpen(false));
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <div className="fixed bottom-8 right-8 z-10">
          <Button>
            <Mail className="mr-3 w-5" onClick={() => setOpen(true)} />
            Contact
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent>
        <p className="mb-10 mt-5">
          Want to reach out ? We'd love to hear from you ! But please, let's
          keep this professional... or at least interesting.
        </p>
        <div className="space-y-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="New Venue" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please come play a gig at my fancy new venue..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center">
                <Button type="submit">Send it!</Button>
              </div>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
};
