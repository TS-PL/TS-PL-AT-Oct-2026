import { test, expect } from '@playwright/test';

test.describe('Test Suite #1', () => {
  test.use({ baseURL: 'https://rahulshettyacademy.com/AutomationPractice/' });

  test('Test CSS and XPATH', async ({ page }) => {
    await test.step('Navigate to Site', async () => {
      await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
      await expect(page).toHaveTitle('Practice Page');
    });

    await test.step('Check radio button 2', async () => {
      await page.locator('[value="radio2"]').check();
      await expect(page.locator('[value="radio2"]')).toBeChecked();
    });

    await test.step('Fill in Bulgaria', async () => {
      await page.locator('#autocomplete').fill('Bulgaria');
      await page.locator('.ui-menu-item').first().click();
      await expect(page.locator('#autocomplete')).toHaveValue('Bulgaria');
    });

    await test.step('Select option 2 from dropdown', async () => {
      await page.locator('#dropdown-class-example').selectOption('option2');
      await expect(page.locator('#dropdown-class-example')).toHaveValue('option2');
    });

    await test.step('Check checkbox 3', async () => {
      await page.locator('#checkBoxOption3').check();
      await expect(page.locator('#checkBoxOption3')).toBeChecked();
    });

    await test.step('Click on the "Hide" button', async () => {
      await page.locator('#hide-textbox').click();
      await expect(page.locator('#displayed-text')).toBeHidden();
    });

    await test.step('Hover over the "Mouse Hover" element', async () => {
      await page.locator('#mousehover').hover();
      await expect(page.locator('a[href="#top"]')).toBeVisible();
    });
  });
  test('Test Playwright locators', async ({ page }) => {
    await test.step('Navigate to Site', async () => {
      await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
      await expect(page).toHaveTitle('Automation Testing Practice: PlaywrightPractice');
    });

    await test.step('Click on Navigation in getByRole', async () => {
      await page.getByRole('link', { name: 'Home' }).first().click();
      await page.getByText('Data Entry Form').isVisible();
    });
    await test.step('Locate colored text in getByText', async () => {
      await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
      await expect(page.getByText('colored text')).toHaveCSS('color', 'rgb(255, 0, 0)');
    });
    await test.step('Check Standard radio with getByLabel', async () => {
      await expect(page.getByLabel('Standard')).not.toBeChecked();
      await page.getByLabel('Standard').check();
      await expect(page.getByLabel('Standard')).toBeChecked();
    });

    await test.step('Check editable field in getByPlaceholders', async () => {
      await expect(page.getByPlaceholder('Enter your full name')).toBeEditable();
      await page.getByPlaceholder('Enter your full name').fill('Konstantina Hadzhiantonova');
    });

    await test.step('Check image is visible in getByAltText', async () => {
      await expect(page.getByRole('img', { name: '<img alt="logo image"' })).toBeVisible;
    });

    await test.step('Check full text of element in getByTitle', async () => {
      await expect(page.getByTitle('HyperText Markup Language')).toHaveText('HTML');
    });

    await test.step('Check part of text of element in getByTestId', async () => {
      await expect(page.getByTestId('profile-email')).toContainText('john.doe');
    });
  });
});
