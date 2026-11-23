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

import { test, expect } from '@playwright/test';

test.describe('Homework 06 test Suite', () => {
  test('First test scenario', async ({ page }) => {
    await test.step('Navigate to the Automation Practice page', async () => {
      await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
      await expect(page).toHaveURL('https://rahulshettyacademy.com/AutomationPractice/');
    });

    await test.step('Check radio button #2 and assert it is checked', async () => {
      await page.locator('input[value="radio2"]').check();
      await expect(page.locator('input[value="radio2"]')).toBeChecked();
    });

    await test.step('Fill the input with "Bulgaria" and select the first auto complete suggestion', async () => {
      await page.locator('#autocomplete').fill('Bulgaria');
      await page.locator('.ui-menu-item').first().click();
      await expect(page.locator('#autocomplete')).toHaveValue('Bulgaria');
    });

    await test.step('Select option #2 from the dropdown and verify it is selected', async () => {
      await page.locator('#dropdown-class-example').selectOption('option2');
      await expect(page.locator('#dropdown-class-example')).toHaveValue('option2');
    });

    await test.step('Check checkbox #3 and verify it is checked', async () => {
      await page.locator('#checkBoxOption3').check();
      await expect(page.locator('#checkBoxOption3')).toBeChecked();
    });

    await test.step('Click on the "Hide" button and verify the input element is hidden', async () => {
      await page.locator('#hide-textbox').click();
      await expect(page.locator('#displayed-text')).toBeHidden();
    });

    await test.step('Hover over the "Mouse Hover" element and verify the "Top" link is visible', async () => {
      await page.locator('#mousehover').hover();
      await expect(page.locator('.mouse-hover-content a:has-text("Top")')).toBeVisible();
    });
  });

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

  test('Second test scenario', async ({ page }) => {
    await test.step('Navigate to the Playwright Practice page', async () => {
      await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
      await expect(page).toHaveURL(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html',
      );
    });

    await test.step('Click on a navigation bar and assert navigation has taken place', async () => {
      await page.locator('#PageList2').getByRole('link', { name: 'Home' }).click();
      await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
      await page.goBack();
    });

    await test.step('Assert the color of a paragraph', async () => {
      await expect(page.getByText('Automation Testing Practice')).toHaveCSS(
        'color',
        'rgb(181, 18, 0)',
      );
    });

    await test.step('Fill an input field and assert it is editable', async () => {
      await expect(page.getByPlaceholder('Enter your full name')).toBeEditable();
      await page.getByPlaceholder('Enter your full name').fill('Nina Panova');
      await expect(page.getByPlaceholder('Enter your full name')).toHaveValue('Nina Panova');
    });

    await test.step('Assert an image is visible', async () => {
      await expect(page.getByAltText('logo image')).toBeVisible();
    });
  });
});
