import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { AuthContextProvider } from "@/contexts/AuthContext";
import { getStorageModel } from "@/lib/storage";
import { auth } from "@/constants/auth";
import { ThemeProvider } from "@/components/theme-provider";
import router from "@/router";
import "@/index.css";

const getStoredTheme = () => {
  const storedTheme = getStorageModel(auth.USER);
  if (storedTheme) {
    const parsedTheme = JSON.parse(storedTheme);
    if (parsedTheme.theme === "light" || parsedTheme.theme === "dark") {
      return parsedTheme.theme;
    }
  }
  return "dark";
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeProvider defaultTheme={getStoredTheme()} storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
