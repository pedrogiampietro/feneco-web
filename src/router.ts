import { createBrowserRouter } from "react-router-dom";
import GeneralError from "./pages/Errors/general-error";
import NotFoundError from "./pages/Errors/not-found-error";
import MaintenanceError from "./pages/Errors/maintenance-error";

const router = createBrowserRouter([
  // Main routes
  {
    path: "/",
    lazy: async () => {
      const AppShell = await import("./components/app-shell");
      return { Component: AppShell.default };
    },
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import("./pages/NewsDisplay")).default,
        }),
      },
      {
        path: "highscores",
        lazy: async () => ({
          Component: (await import("./pages/Highscores")).default,
        }),
      },
      {
        path: "/sign-up",
        lazy: async () => ({
          Component: (await import("./pages/Auth/sign-up")).default,
        }),
      },
      {
        path: "/forgot-password",
        lazy: async () => ({
          Component: (await import("./pages/Auth/forgot-password")).default,
        }),
      },
    ],
  },

  // Error routes
  { path: "/500", Component: GeneralError },
  { path: "/404", Component: NotFoundError },
  { path: "/503", Component: MaintenanceError },

  // Fallback 404 route
  { path: "*", Component: NotFoundError },
]);

export default router;
