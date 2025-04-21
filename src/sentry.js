// sentry.js or sentry.ts
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/browser"; // ✅ from @sentry/browser

Sentry.init({
  dsn: "https://f4d32f206498fd7d4e9922ac308a9755@o4509175748886528.ingest.us.sentry.io/4509193212264448",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", "zentry-eosin.vercel.app"],
});
