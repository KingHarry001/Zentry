import './sentry';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://f4d32f206498fd7d4e9922ac308a9755@o4509175748886528.ingest.us.sentry.io/4509193212264448",
  integrations: [Sentry.browserTracingIntegration()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", "zentry-eosin.vercel.app"],
});

ReactDOM.render(<App />, document.getElementById("root"));


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
