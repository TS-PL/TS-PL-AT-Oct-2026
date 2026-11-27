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

test('Scenario with CSS and Xpath', async ({ page }) => {
  await test.step('Navigate to test page', async () => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page, 'Page title is incorrect').toHaveTitle('Practice Page');
  });

  await test.step('Check button #2 and verify the action', async () => {
    await page.locator('input[value="radio2"]').click();
    await expect
      .soft(page.locator('input[value="radio2"]'), 'Radio button #2 is not selected')
      .toBeChecked();
  });

  await test.step('Fill the input and verify the value', async () => {
    await page.locator('input[id="autocomplete"]').fill('Bulgaria');
    await expect
      .soft(page.locator('.ui-menu-item-wrapper'), 'Select countries input is disabled')
      .toBeEnabled();
    await page.locator('.ui-menu-item-wrapper').first().click();
    await expect
      .soft(page.locator('input[id="autocomplete"]'), 'The value is incorrect')
      .toHaveValue('Bulgaria');
  });

  await test.step('Select option#2 from dropdown and verify it', async () => {
    await page.locator('#dropdown-class-example').selectOption('Option2');
    await expect
      .soft(page.locator('#dropdown-class-example'), 'The value is incorrect')
      .toHaveValue('option2');
  });

  await test.step('Check checkbox#3 and verify the action', async () => {
    await page.locator('#checkBoxOption3').check();
    await expect.soft(page.locator('#checkBoxOption3'), 'Checkbox is not checked').toBeChecked();
  });

  await test.step('Hide and input element and verify the action', async () => {
    const hideShowInpit = page.locator('#displayed-text');
    await expect.soft(hideShowInpit, 'The input is hidden').not.toBeHidden();
    await page.locator('#hide-textbox').click();
    expect(hideShowInpit, 'The input is not hidden').toBeHidden();
  });

  await test.step('Hover over an element and verify the visability of an additional element', async () => {
    const topLink = page.locator('//div[contains(@class,"mouse-hover-conten")]//a[text()="Top"]');
    await expect.soft(topLink, '"Top" link is visible').not.toBeVisible();
    await page.locator('#mousehover').hover();
    await expect.soft(topLink, '"Top" link is not visible').toBeVisible();
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

test('Scenario with Playwright locators', async ({ page }) => {
  await test.step('Navigate to test page', async () => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await expect(page, 'Page title is incorrect').toHaveTitle(
      'Automation Testing Practice: PlaywrightPractice',
    );
  });

  await test.step('Click on a locatior in Navigation section and assert the navigation', async () => {
    await page.locator('#role-locators').getByRole('link', { name: 'Products' }).click();
    await expect(page, 'You are not on the right page').toHaveURL(
      'https://testautomationpractice.blogspot.com/p/playwrightpractice.html#',
    );
  });

  await test.step('Pick a colored text and assert its color', async () => {
    await expect
      .soft(page.getByText('colored text', { exact: true }), 'The element have wrong color')
      .toHaveCSS('color', 'rgb(255, 0, 0)');
  });

  await test.step('Check the unchecked radio button and assert the action', async () => {
    const expressRadioButton = page.getByLabel('Express');
    await expect.soft(expressRadioButton, 'Express radio button is checked').not.toBeChecked;
    await expressRadioButton.check();
    await expect.soft(expressRadioButton, 'Express radio button is not checked').toBeChecked();
  });

  await test.step('Pick an input fill it and assert it is editable', async () => {
    const textInput = page.getByPlaceholder('Type your message here...');
    await expect.soft(textInput, 'The input filed is not editable').toBeEditable();
    await textInput.fill('My text here');
    await expect.soft(textInput, 'The message is not correct').toHaveValue('My text here');
  });

  await test.step("Assert image's  visability", async () => {
    await expect.soft(page.getByAltText('logo image'), 'The image is not visible').toBeVisible();
  });

  await test.step("Assert one of the elements' full text", async () => {
    await expect
      .soft(page.getByTitle('Tooltip text'), 'The text is not correct')
      .toHaveText('This text has a tooltip');
  });

  await test.step('Assert one of the element contains part of its text', async () => {
    await expect
      .soft(page.getByTestId('product-card-2'), 'The element does not contain the text')
      .toContainText('Product');
  });
});
