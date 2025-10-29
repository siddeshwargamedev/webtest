import { ApplicationInsights } from "@microsoft/applicationinsights-web";

let appInsights = null;

export const initAppInsights = () => {
  if (typeof window === "undefined") return; // avoid SSR init

  if (!appInsights) {
    appInsights = new ApplicationInsights({
      config: {
        connectionString: "InstrumentationKey=91b409d3-15f1-4934-8c4d-267dc75a78f4;IngestionEndpoint=https://centralindia-0.in.applicationinsights.azure.com/;LiveEndpoint=https://centralindia.livediagnostics.monitor.azure.com/;ApplicationId=413123f8-c80e-49f5-ac78-c1cd04cdf424", // or full connection string
        enableAjaxErrorStatusText: true,
        enableRequestHeaderTracking: true,
        enableResponseHeaderTracking: true,
        enableCorsCorrelation: true,
        autoTrackPageVisitTime: true,
        maxBatchInterval: 5000,
      },
    });
    appInsights.loadAppInsights();
    appInsights.trackPageView();
  }

  return appInsights;
};

export const getAppInsights = () => appInsights;
