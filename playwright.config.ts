import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // folder containing spec files
  testDir: './playwright/tests/',

  /* Set up regex to recognize files with tests by their name */
  // testMatch: '.*(test|spec).(js|ts)', // default is contain 'spec' and end with '.ts'

  // Give failing tests 3 retry attempts
  // retries: 1,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { open: 'failure' }]],

  /* Output directory for test artifacts */
  outputDir: './test-results/', // this is default folder

  /* Maximum time one test can run for */
  timeout: 30 * 1000, // default is 30 sec. This equals 30 sec.

  /* Maximum time to wait for an assertion */
  expect: { timeout: 5 * 1000 }, // default is 5 sec. This equals 5 sec.

  /* Set number of parallel workers */
  // workers: 1,

  /* Run tests in files in parallel */
  // fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: 0,

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'https://st2016.inv.bg/',

    /* Browser Mode */
    headless: false, // default is headless

    /* Action Timeout */
    // actionTimeout: 10 * 1000, // default is 0 (no limit). This equals 10 sec.

    /* Browser height and width */
    // viewport: { width: 1500, height: 730 },

    /* Whether to ignore HTTPS errors when sending network requests */
    // ignoreHTTPSErrors: true,

    /* Enable File Downlaods in Chrome */
    // acceptDownloads: true,

    /* Add Report Artefacts: */

    // Capture a screenshot upon scenario failure. Soft assertions fail scenarios at end of test execution and will not screenshot the issue as it fails.
    // screenshot: 'only-on-failure',

    // Captures a full video of the scenario execution. Soft assertions pair better with a full video.
    // video: 'retain-on-failure',

    // Collect a trace file for debugging when retrying all failed tests. See https://playwright.dev/docs/trace-viewer
    trace: 'retain-on-failure',

    /* Activates slow motion execution in headed mode */
    launchOptions: {
      slowMo: 1500,
    },
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },
  ],
});
