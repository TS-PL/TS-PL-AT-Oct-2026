import { test, expect } from '@playwright/test';

test('Basic Scenario', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(
      'Fast and reliable end-to-end testing for modern web apps | Playwright',
    );

    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
