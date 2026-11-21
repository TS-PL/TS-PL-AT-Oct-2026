//npx playwright test homework-6.spec.ts

import { test, expect } from '@playwright/test';

/*
  Test Suite for the both scenarios - Task1 and Task2.
*/
test.describe('Test Suite', { tag: ['@smoke', '@regression'] }, () => {
  test('Task1 - CSS and XPATH selectors only', async ({ page }) => {
    await test.step('Navigate to the Practice Page.', async () => {
      await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
      await expect(page).toHaveTitle('Practice Page', { timeout: 60000 });
    });

    await test.step('Check radio button #2. Assert Radio button #2 is checked.', async () => {
      await page.locator("xpath=//input[@value='radio2']").check();
      await expect.soft(page.locator("xpath=//input[@value='radio2']")).toBeChecked();
    });

    await test.step('Fill the input with "Bulgaria". Click on the first auto complete suggestion. Verify the input value is "Bulgaria".', async () => {
      await page.locator('css=#autocomplete').pressSequentially('Bulgaria');
      await page.locator('css=.ui-menu-item-wrapper').click();
      await expect.soft(page.locator('css=#autocomplete')).toHaveValue('Bulgaria');
    });

    await test.step('Select option #2 from the dropdown. Verify the selected option is "option2".', async () => {
      await page
        .locator("xpath=//select[@id='dropdown-class-example']")
        .selectOption({ label: 'Option2' });
      await expect
        .soft(page.locator("xpath=//select[@id='dropdown-class-example']"))
        .toHaveValue('option2');
    });

    await test.step('Check checkbox #3. Verify checkbox #3 is checked.', async () => {
      await page.locator('css=#checkBoxOption3').check();
      await expect.soft(page.locator('css=#checkBoxOption3')).toBeChecked();
    });

    await test.step('Click on the "Hide" button. Verify the input element is now hidden.', async () => {
      await expect.soft(page.locator("//input[@id='displayed-text']")).toBeVisible();
      await page.locator("//input[@id='hide-textbox']").click();
      await expect(page.locator("//input[@id='displayed-text']")).toBeHidden();
    });

    await test.step('Hover over the "Mouse Hover" element. Verify the "Top" link is now visible.', async () => {
      await page.locator('#mousehover').hover();
      await expect.soft(page.locator("a[href='#top']")).toBeVisible();
    });
  });

  test('Task2 - Playwright selectors only', async ({ page }) => {
    await test.step('Navigate to the Playwright Practice page', async () => {
      await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

      if (await page.getByRole('link', { name: 'Разбрах' }).isVisible()) {
        await page.getByRole('link', { name: 'Разбрах' }).click();
      }

      await expect(page.getByText('For Selenium, Cypress &')).toBeVisible({ timeout: 60000 });
      await expect(page.getByRole('heading', { name: 'PlaywrightPractice' })).toBeVisible();
    });

    await test.step('Section 1 getByRole() - Pick a locator from section Navigation and click on it.', async () => {
      await page.getByRole('heading', { name: 'Navigation' }).isVisible();
      await page.getByRole('link', { name: 'Contact' }).first().click();
      await expect
        .soft(page.getByRole('link', { name: 'Contact' }).first())
        .toHaveCSS('text-decoration', /underline/);
      await expect(page.getByRole('link', { name: 'Contact' }).first()).toBeFocused();
    });

    await test.step('Section 2 getByText() - Pick one of the paragraphs with colored text and assert its color', async () => {
      await expect.soft(page.getByText('colored text')).toHaveCSS('color', 'rgb(255, 0, 0)');
    });

    await test.step('Section 3 getByLabel() - Check the unchecked radio button and assert it is checked', async () => {
      await page.getByLabel('Standard').check();
      await expect(page.getByLabel('Standard')).toBeChecked();
      await page.getByLabel('Express').check();
      await expect.soft(page.getByLabel('Express')).toBeChecked();
    });

    await test.step('Section 3 getByPlaceholder() - Pick an input field, assert it is editable, and fill it with text', async () => {
      await page.getByPlaceholder('Search products...').click();
      await expect(page.getByPlaceholder('Search products...')).toBeEditable();
      await page.getByPlaceholder('Search products...').fill('Playwright Automation');
    });

    await test.step('Section 4 getByAltText() - Assert the image is visible', async () => {
      await expect
        .soft(page.getByRole('img', { name: 'logo image' }))
        .toBeVisible({ timeout: 6000 });
    });

    await test.step('Section 5 getByTitle() - Assert one of the elements', async () => {
      await expect(page.getByTitle('Tooltip text')).toHaveText('This text has a tooltip');
    });

    await test.step('Section 6 getByTestId() - Assert one of the elements contains part of its text', async () => {
      await expect.soft(page.getByText('john.doe@example.com', { exact: true })).toContainText('@');
    });
  });
});
