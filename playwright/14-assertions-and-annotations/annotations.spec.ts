import { test, expect } from '@playwright/test';

// documentation: https://playwright.dev/docs/test-annotations

/*
  Annotations allow for basic test structure
*/

// test.describe() - creates a group of tests like a test suite. Can have nested subgroups.
// test.describe.skip - can skip whole test suites
// test.describe.parallel() - creates a test suite that forces execution of tests within in parallel
// test.describe.serial() - creates a test suite that forces execution of tests within in serial (only as last resort, because it slows down test execution and makes tests dependent on each other, which is not a good practice)
// test.use({ colorScheme: 'dark' }); - set group specific scenario configurations, used in test.desribe block
// tags - set at suite and scenario levels, used for easier scenario subgroup execution
// test.step() - creates a test step which can contain multiple actions and assertions, used for better reporting
// test.only() - run only this test and ignore all who dont have this, used for development purposes
// test.skip() - marks a test to be skipped in test execution, used to disable tests, can be added inside a test with condition
// test.fixme() - put at a spot to stop test execution of that particualr scenario at this point, used when scenarios work only partially due to changes or bugs, can have comments too
// test.slow(); - force triple default timeout for this scenario or suite
// test.fail(); - force scenario failure, used to check for false possitves
// page.pause(); - adds a breakpoint, pausing test execution and entering debug mode
