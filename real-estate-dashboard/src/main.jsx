import React from "react";
import { createRoot } from 'react-dom/client'
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.jsx";
import Dashboard from "./dashboard/index.jsx"; 

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Dashboard />
    </ThemeProvider>
  </React.StrictMode>
);
