import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://f4d32f206498fd7d4e9922ac308a9755@o4509175748886528.ingest.us.sentry.io/4509193212264448",
  integrations: [
    Sentry.browserTracingIntegration({
      tracePropagationTargets: ["localhost", "zentry-eosin.vercel.app"],
    }),
  ],
  tracesSampleRate: 1.0,
});
