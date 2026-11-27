// use the codegen tool to generate the following scenario:

// go to https://pragmatic.bg/
// hover on "Курсове"
// click on "Автоматизирано Тестване с Playwright и TypeScript"
// click the title of lecture 11 (its a link)

// afterwords you will have a new file in main project folder.
// Move it to your homework folder and rename the file and scenario inside to something meaningfull
// you can execute the new scenario "*.spec.ts" file by scenario name with this command: `npx playwright test -g "Scenario Name"` by changing "Scenario Name" to your scenario's name

// bonus: you can add some assertions to check page titles after each navigation (see lecture 12 basic scenario for examples)

// Good luck and happy hacking!

import { test, expect } from '@playwright/test';

test('Codegen Test', async ({ page }) => {
  await page.goto('https://pragmatic.bg/');
  await page.getByRole('link', { name: 'Курсове', exact: true }).hover();
  await page
    .locator('#menu-item-9220')
    .getByRole('link', { name: 'Автоматизирано Тестване с' })
    .click();
  await expect(page.locator('#post-9199')).toContainText(
    'Автоматизирано Тестване с Playwright и TypeScript',
  );
  await page.getByRole('link', { name: 'Въведение в Playwright' }).click();
  await expect(page.locator('#post-9209')).toContainText(
    'Какво представлява Playwright и защо се използва за тестване.',
  );
  await expect(page.getByRole('heading', { name: 'Course Curriculum' })).toBeVisible();
});
