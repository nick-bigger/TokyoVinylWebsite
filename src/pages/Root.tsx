/// <reference types="vite-plugin-svgr/client" />
import {MainNav} from "@/components/ui/main-nav.tsx";
import {Outlet, RootRoute} from '@tanstack/react-router'
import Logo from "../assets/logo.svg?react";
import {Button} from "@/components/ui/button.tsx";
import {Contact} from "@/pages/Contact.tsx";
import HeaderBackground from "@/assets/header.png";
import InstagramLogo from "../assets/Instagram_Glyph_White.svg?react"
import XLogo from "../assets/x-logo.svg?react"
import TikTokLogo from "../assets/tiktok-logo.svg?react"
import {Separator} from "@/components/ui/separator.tsx";
import record from "../assets/record.png"
import {Toaster} from "@/components/ui/toaster.tsx";

export const route = new RootRoute({
  component: () => (
    <div className="min-h-[100vh]">
      <div className="absolute top-0 overflow-hidden w-full h-[200px] z-[-1]">
        <img
          src={HeaderBackground}
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        />
      </div>
      <MainNav className="mb-20"/>
      <div
        className="absolute rotate-12 z-[-1] top-[-50px] right-[-50px] w-[200px] md:top-[-50px] md:right-[-50x] md:w-[300px] lg:top-[-130px] lg:right-[-100px] lg:w-[500px] xl:top-[-130px] xl:right-[-100px] xl:w-[600px]">
        <img src={record}/>
      </div>
      <div className="flex-col min-h-full">
        <div className="flex flex-col gap-5 items-center">
          <div className="flex flex-col gap-5 items-center">
            <div className="w-60">
              <Logo title="Logo"/>
            </div>
            <div className="h-5 flex gap-3">
              <p>Est. 2023</p>
              <Separator orientation="vertical"/>
              <p>Lost In Austin</p>
            </div>
            <div className="flex gap-5">
              <Button onClick={() => window.open("https://www.instagram.com/tokyo.vinyl/", "_blank")}>
                <InstagramLogo className="h-5 w-5"/>
              </Button>
              <Button onClick={() => window.open("https://twitter.com/tokyo_vinyl", "_blank")}>
                <XLogo className="h-5 w-5"/>
              </Button>
              <Button onClick={() => window.open("https://www.tiktok.com/@tokyo.vinyl", "_blank")}>
                <TikTokLogo className="h-5 w-5"/>
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-20 max-w-screen-xl flex m-auto">
          <Outlet/>
        </div>
        <Contact/>
        <Toaster/>
      </div>
      <div className="relative bottom-0 overflow-hidden w-full h-[200px] z-[-1]">
        <img
          src={HeaderBackground}
          className="w-full h-full object-cover rotate-180"
        />
      </div>
    </div>
  ),
})