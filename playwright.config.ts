import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  globalTimeout: 60000, //for all tests
  timeout: 40000, //for each test

  expect: { //for locator assertions
    timeout: 20000
  },

  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 5,

  // reporter: 'dot',
  // reporter: 'line',
  // reporter: 'list',
  // reporter: [['json', {outputFile: 'test-results/results.json'}]],
  // reporter: [['html']],
  reporter: 'allure-playwright', //allure serve allure-results

  use: {
    actionTimeout: 20000, // for actions like click()
    navigationTimeout: 20000, // for page navigation page.goto()

    // baseURL: 'https://www.w3schools.com',

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on-first-retry'
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // storageState: '.auth/user.json'
      },
      // dependencies: ['setup']
    },

    {
      name: 'mobile',
      grep: /@mobile/,
      use: {
        baseURL: 'dev url',
        ...devices['iPhone 11']
      },
    },

    {
      name: 'setup',
      testMatch: 'auth.setup.ts'
    },
  ]
});
