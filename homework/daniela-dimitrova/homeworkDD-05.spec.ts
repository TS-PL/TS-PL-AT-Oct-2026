import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://pragmatic.bg/');
  await expect(page.getByRole('link', { name: 'Pragmatic LLC' })).toBeVisible();
  // Hover Element
  await page.getByRole('link', { name: 'Курсове' }).hover();

  // click on "Автоматизирано Тестване с Playwright и TypeScript"
  await page
    .locator('#menu-item-9220')
    .getByRole('link', { name: 'Автоматизирано Тестване с' })
    .click();

  // click the title of lecture 11 (its a link)
  await expect(
    page.getByRole('link', { description: 'Въведение в Playwright', exact: true }),
  ).toContainText('Въведение в Playwright');
});
