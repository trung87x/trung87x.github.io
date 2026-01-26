import { defineCloudflareConfig } from "@opennextjs/cloudflare/config";

export default defineCloudflareConfig({
  incrementalCache: {
    loader: "r2",
  },
});
