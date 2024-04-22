/* This file is used for Microsoft Playwright Testing Service (Cloud Solution) */

import config from "./playwright.config";
import { defineConfig } from "@playwright/test";
import dotenv from "dotenv";
import { env } from "process";

dotenv.config();

// Name the test run if it's not named yet.
env.PLAYWRIGHT_SERVICE_RUN_ID = env.PLAYWRIGHT_SERVICE_RUN_ID || new Date().toISOString();

export default defineConfig(config, {
  workers: 50,
  use: {
    ...config.use,
    // Specifies the service endpoint.
    connectOptions: {
      wsEndpoint: `${env.PLAYWRIGHT_SERVICE_URL}?cap=${JSON.stringify({
        os: 'linux',
        runId: env.PLAYWRIGHT_SERVICE_RUN_ID,
      })}`,
      timeout: 30000,
      headers: {
        'x-mpt-access-key': env.PLAYWRIGHT_SERVICE_ACCESS_TOKEN!,
      },
      // Allow service to access the localhost.
      exposeNetwork: '<loopback>',
    },
  },
});
