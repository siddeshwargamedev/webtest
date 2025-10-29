"use client";
import { useEffect } from "react";
import { initAppInsights } from "./../lib/appins";

export default function AppInsightsProvider({ children }) {
  useEffect(() => {
    const ai = initAppInsights();

    // Optionally log route changes
    const handleRouteChange = (url) => {
      ai?.trackPageView({ name: url });
    };

    window.addEventListener("popstate", () => handleRouteChange(window.location.pathname));

    return () => {
      window.removeEventListener("popstate", () => handleRouteChange(window.location.pathname));
    };
  }, []);

  return <>{children}</>;
}
