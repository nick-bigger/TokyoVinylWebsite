import HeaderBackground from "@/assets/header.png";
import { Button } from "@/components/ui/button.tsx";
import { MainNav } from "@/components/ui/main-nav.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { Toaster } from "@/components/ui/toaster.tsx";
import { Contact } from "@/pages/Contact.tsx";
import { Outlet } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import InstagramLogo from "../assets/Instagram_Glyph_White.svg?react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Logo from "../assets/logo.svg?react";
import record from "../assets/record.png";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import TikTokLogo from "../assets/tiktok-logo.svg?react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import XLogo from "../assets/x-logo.svg?react";

export const Layout = () => (
  <div className="min-h-[100vh]">
    <div className="absolute top-0 z-[-1] h-[200px] w-full overflow-hidden">
      <img
        src={HeaderBackground}
        className="absolute inset-0 z-[-1] h-full w-full object-cover"
      />
    </div>
    <MainNav className="mb-20" />
    <div className="absolute right-[-50px] top-[-50px] z-[-1] w-[200px] rotate-12 md:right-[-50x] md:top-[-50px] md:w-[300px] lg:right-[-100px] lg:top-[-130px] lg:w-[500px] xl:right-[-100px] xl:top-[-130px] xl:w-[600px]">
      <img src={record} />
    </div>
    <div className="min-h-full flex-col">
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-5">
          <div className="w-60">
            <Logo title="Logo" />
          </div>
          <div className="flex h-5 gap-3">
            <p>Est. 2023</p>
            <Separator orientation="vertical" />
            <p>Lost In Austin</p>
          </div>
          <div className="flex gap-5">
            <Button
              onClick={() =>
                window.open("https://www.instagram.com/tokyo.vinyl/", "_blank")
              }
            >
              <InstagramLogo className="h-5 w-5" />
            </Button>
            <Button
              onClick={() =>
                window.open("https://twitter.com/tokyo_vinyl", "_blank")
              }
            >
              <XLogo className="h-5 w-5" />
            </Button>
            <Button
              onClick={() =>
                window.open("https://www.tiktok.com/@tokyo.vinyl", "_blank")
              }
            >
              <TikTokLogo className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="m-auto flex max-w-screen-xl space-y-20">
        <Outlet />
      </div>
      <Contact />
      <Toaster />
    </div>
    <div className="relative bottom-0 z-[-1] h-[200px] w-full overflow-hidden">
      <img
        src={HeaderBackground}
        className="h-full w-full rotate-180 object-cover"
      />
    </div>
  </div>
);
