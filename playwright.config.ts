/* This file is used for local Playwright testing */

import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import { env } from "process";

dotenv.config({ path: '../../.env' });

const config = defineConfig({
  timeout: 60000,
  testMatch: /.*spec.ts/,
  /* Run tests in parallel */
  fullyParallel: true,
  workers: 10,
  use: {
    baseURL: env.PLAYWRIGHT_BASE_URL || 'http://localhost:5173',
  },
  reporter: [['html', { outputFolder: './__tests__/report' }]],
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Desktop Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'Desktop Safari',
      use: { ...devices['Desktop Safari'] },
    },
    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
    /* Test against branded browsers. */
    {
      name: 'Desktop Microsoft Edge',
      use: { ...devices['Desktop Edge'] },
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});

export default config;
