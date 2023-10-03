import {route as rootRoute} from "./pages/Root"
import {route as HomeRoute} from "./pages/Home"
import {route as AboutRoute} from "./pages/About.tsx"
import {route as ScheduleRoute} from "./pages/Schedule.tsx";

Object.assign(HomeRoute.options, {
  path: "/",
  getParentRoute: () => rootRoute,
})

Object.assign(AboutRoute.options, {
  path: "/about",
  getParentRoute: () => rootRoute,
})


Object.assign(ScheduleRoute.options, {
  path: "/schedule",
  getParentRoute: () => rootRoute,
})

export const routeTree = rootRoute.addChildren([
  HomeRoute,
  AboutRoute,
  ScheduleRoute,
])
