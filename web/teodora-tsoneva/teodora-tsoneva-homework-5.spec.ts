// npx playwright test -g "teodora-tsoneva-homework-5.spec.ts"
// use the codegen tool to generate the following scenario:

// go to https://pragmatic.bg/
// hover on "Курсове"
// click on "Автоматизирано Тестване с Playwright и TypeScript"
// click the title of lecture 11 (its a link)

import { test, expect } from '@playwright/test';

test('pragmatic automation course and lecture 11 navigation', async ({ page }) => {
  await page.goto('https://pragmatic.bg/');
  await expect(page.getByRole('link', { name: 'Pragmatic LLC' })).toBeVisible();
  await page.getByRole('link', { name: 'Курсове', exact: true }).hover();
  await page
    .locator('#menu-item-9220')
    .getByRole('link', { name: 'Автоматизирано Тестване с' })
    .click();
  await expect(page.getByRole('heading', { name: 'Автоматизирано Тестване с' })).toBeVisible();
  await page.getByRole('link', { name: 'Въведение в Playwright' }).click();
});

// afterwords you will have a new file in main project folder.
// Move it to your homework folder and rename the file and scenario inside to something meaningfull
// you can execute the new scenario "*.spec.ts" file by scenario name with this command: `npx playwright test -g "Scenario Name"` by changing "Scenario Name" to your scenario's name
