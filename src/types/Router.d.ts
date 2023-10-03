// Register your router for maximum type safety
import {route as rootRoute} from "@/pages/Root.tsx";

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }

  interface FileRoutesByPath {
    "/": {
      parentRoute: typeof rootRoute
    }
    "/schedule": {
      parentRoute: typeof rootRoute
    }
    "/about": {
      parentRoute: typeof rootRoute
    }
  }
}