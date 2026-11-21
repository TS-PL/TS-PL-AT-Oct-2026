// create the below 2 test scenarios and put them in a test suite
// put all groups of actions into a test.step
// use soft assertions, unless we are assrting a navigation has taken place
// try to add meaningful comments to all assertions
// you can find test execution command examples in the Readme.md file in project's main folder
// you can add -ui mode debug your tests during execution
// after execution view html report with command: 'npx playwright show-report' (if any tests failed report will open automaticaly)
// a trace artifact will be added to the report if any test has failed, you can use as well to debug your tests

// first test scenario use CSS and XPATH selectors like page.locator('location string'):

// navigate to https://rahulshettyacademy.com/AutomationPractice/
// assert succesful naviation

// check radio button #2
// assert Radio button #2 is checked

// fill the input with "Bulgaria"
// click on the first auto complete suggestion
// Verify the input value is "Bulgaria"

// select option #2 from the dropdown
// Verify the selected option is "option2"

// check checkbox #3
// Verify checkbox #3 is checked

// click on the "Hide" button
// Verify the input element is now hidden

// hover over the "Mouse Hover" element
// Verify the "Top" link is now visible

// second test scenario use only Playwright selectors like page.getByRole('button', { name: 'Вход' }).click();

// navigate to https://testautomationpractice.blogspot.com/p/playwrightpractice.html
// assert succesful naviation

// In Playwright Practice session group 1. getByRole() Locators pick a locator from section Navigation and click on it.
// assert navigation has taken place

// In Playwright Practice session group 2. getByText() Locators pick one of the paragraphs with colored text and assert its color

// In Playwright Practice session group 3. getByLabel() Locators Locators check the unchecked radio button
// assert is is checked now

// In Playwright Practice session group 4. getByPlaceholder() Locators pick an input fill and assert it is editable
// fill the input filed with text

// In Playwright Practice session group 5.getByAltText() Locators assert the image is visible

// In Playwright Practice session group 6. getByTitle() Locators assert one of the elements' full text

// In Playwright Practice session group 7. getByTestId() Locators assert one of the element contains part of its text

//npx playwright test homework-6.spec.ts

import { test, expect } from '@playwright/test';

/*
  Test suite for the both scenarios - Task1 and Task2.
*/

test.describe('Test Suite Task1 and Task2', { tag: ['@suite', '@smoke', '@regression'] }, () => {
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
