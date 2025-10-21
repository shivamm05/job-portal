// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"


Sentry.init({
  dsn: "https://897af50ac48d7fc29db0acb52c885b83@o4510193346740224.ingest.us.sentry.io/4510193360371712",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  
  sendDefaultPii: true,
});