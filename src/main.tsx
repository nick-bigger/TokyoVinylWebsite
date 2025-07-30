import * as React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";

import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/sonner";
import "./index.css";
import { EPK } from "./routes/EPK";
import { Home } from "./routes/Home";
import { Music } from "./routes/Music";
import { Root } from "./routes/Root";
import { Schedule } from "./routes/Schedule";
import { Socials } from "./routes/Socials";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30,
      refetchOnWindowFocus: false,
    },
  },
});

const router = createHashRouter([
  {
    element: <Root />,
    path: "*",
    children: [
      { path: "epk", element: <EPK /> },
      { path: "music", element: <Music /> },
      { path: "social", element: <Socials /> },
      { path: "schedule", element: <Schedule /> },
      { path: "", element: <Home /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="theme">
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
