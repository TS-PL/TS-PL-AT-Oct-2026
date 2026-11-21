import { test, expect } from '@playwright/test';

test('Codegen exercise', async ({ page }) => {
  await page.goto('https://pragmatic.bg/');
  await page.getByRole('link', { name: 'Курсове' }).hover();
  await page
    .locator('#menu-item-9220')
    .getByRole('link', { name: 'Автоматизирано Тестване с' })
    .click();
  await page.getByRole('link', { name: 'Въведение в Playwright' }).click();
  await expect(page.getByRole('heading', { name: 'Въведение в Playwright' })).toBeVisible();
  await page.getByRole('heading', { name: 'Course Curriculum' }).click();
});
