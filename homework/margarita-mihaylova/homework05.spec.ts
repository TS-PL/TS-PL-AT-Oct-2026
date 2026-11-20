//npx playwright test -g "Pragmatic courses"

import { test, expect } from '@playwright/test';

test('Pragmatic courses', async ({ page }) => {
  await page.goto('https://pragmatic.bg/');
  await expect(page).toHaveTitle(
    'Pragmatic LLC – Курсове по Програмиране, C#, QA(Тестване), ASP.NET, Java, PHP, Бази Данни',
  );
  await page.getByRole('link', { name: 'Курсове' }).hover();
  await page.locator('#menu-item-9220').getByRole('link', { name: 'Автоматизирано Тестване с' }).click();
  await expect(
    page.getByRole('heading', { name: 'Автоматизирано Тестване с Playwright и TypeScript' }),
  ).toBeVisible;
  await page.getByRole('link', { name: 'Въведение в Playwright' }).click();
  expect(page.getByText('Въведение в Playwright 3 hours 0 mins', { exact: true }));
});
