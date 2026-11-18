//npx playwright test homework-5.spec.ts

// in cmd terminal write - npx playwright codegen https://pragmatic.bg/

// use the codegen tool to generate the following scenario:

// go to https://pragmatic.bg/
// hover on "Курсове"
// click on "Автоматизирано Тестване с Playwright и TypeScript"
// click the title of lecture 11 (its a link)

//then click stop record button
//copy the code and paste in the file :)

// afterwords you will have a new file in main project folder.
// Move it to your homework folder and rename the file and scenario inside to something meaningfull
// you can execute the new scenario "*.spec.ts" file by scenario name with this command: `npx playwright test -g "Scenario Name"` by changing "Scenario Name" to your scenario's name

// bonus: you can add some assertions to check page titles after each navigation (see lecture 12 basic scenario for examples)

// Good luck and happy hacking!

import { test, expect } from '@playwright/test';

test('Navigate to 11 lection - Introduction to Playwright', async ({ page }) => {
  await page.goto('https://pragmatic.bg/');

  await expect(page).toHaveTitle('Pragmatic LLC – Курсове по Програмиране, C#, QA(Тестване), ASP.NET, Java, PHP, Бази Данни',);

  await page.getByRole('link', { name: 'Курсове', exact: true }).hover();

  await page.getByRole('link', { name: 'Автоматизирано Тестване с', description: 'Автоматизирано Тестване с Playwright и TypeScript',}).click();

  await expect(page.getByRole('heading', { name: 'Автоматизирано Тестване с Playwright и TypeScript' })).toBeVisible();

  await page.getByRole('link', { name: 'Въведение в Playwright' }).click();

  await expect(page.getByRole('heading', { name: 'Въведение в Playwright' })).toBeVisible();
  
});
