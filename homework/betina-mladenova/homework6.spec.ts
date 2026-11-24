// create the below 2 test scenarios and put them in a test suite
// put all groups of actions into a test.step
// use soft assertions, unless we are assrting a navigation has taken place
// try to add meaningful comments to all assertions
// you can find test execution command examples in the Readme.md file in project's main folder
// you can add -ui mode debug your tests during execution
// after execution view html report with command: 'npx playwright show-report' (if any tests failed report will open automaticaly)
// a trace artifact will be added to the report if any test has failed, you can use as well to debug your tests

import { test, expect } from '@playwright/test';

test.describe('My first test suite', { tag: '@btest' }, () => {
  // first test scenario use CSS and XPATH selectors like page.locator('location string'):
  test('UI website test using XPATH and CSS', async ({ page }) => {
    // navigate to https://rahulshettyacademy.com/AutomationPractice/
    // assert succesful naviation
    await test.step('Navigate to web page and verify it is loaded', async () => {
      await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
      await expect(page, 'Verify Website URL matches the expected').toHaveURL(
        'https://rahulshettyacademy.com/AutomationPractice/',
      );
      await expect
        .soft(page.locator("//img[@class='logoClass']"), "Verify Website's logo is shown")
        .toBeVisible();
    });

    // check radio button #2
    // assert Radio button #2 is checked
    await test.step('Interact with radio button', async () => {
      const radioButton2 = page.locator("//*[@for='radio2']//input");
      await radioButton2.check();
      await expect.soft(radioButton2, 'Ensure radio button #2 is checked').toBeChecked();
    });

    // fill the input with "Bulgaria"
    // click on the first auto complete suggestion
    // Verify the input value is "Bulgaria"
    await test.step('Fill in country field', async () => {
      const countryInputField = page.locator("//input[@id='autocomplete']");
      await countryInputField.fill('Bulgaria');
      await page.locator('.ui-menu-item-wrapper').click();
      await expect
        .soft(countryInputField, 'Confirm that input field has the correct input')
        .toHaveValue('Bulgaria');
    });

    // select option #2 from the dropdown
    // Verify the selected option is "option2"
    await test.step('Test dropdown selection', async () => {
      const dropdownField = page.locator('#dropdown-class-example');
      await dropdownField.selectOption('Option2');
      await expect
        .soft(dropdownField, 'Verify option2 is selected in the dropdown')
        .toHaveValue('option2');
    });

    // check checkbox #3
    // Verify checkbox #3 is checked
    await test.step('Check checkbox', async () => {
      const checkbox3 = page.locator('#checkBoxOption3');
      await checkbox3.check();
      await expect.soft(checkbox3, 'Ensure checkbox #3 is checked').toBeChecked();
    });

    // click on the "Hide" button
    // Verify the input element is now hidden
    await test.step('Test Hide button', async () => {
      await page.locator('#hide-textbox').click();
      await expect
        .soft(page.locator('#displayed-text'), 'Verify input field is hidden from the page')
        .toBeHidden();
    });

    // hover over the "Mouse Hover" element
    // Verify the "Top" link is now visible
    await test.step('Hover action test', async () => {
      await page.locator('#mousehover').hover();
      await expect
        .soft(page.locator("//a[@href='#top']"), 'Check if "Top" link is displayed after hover')
        .toBeVisible();
    });
  });

  // second test scenario use only Playwright selectors like page.getByRole('button', { name: 'Вход' }).click();
  test('UI website test using Playwright selectors', async ({ page }) => {
    // navigate to https://testautomationpractice.blogspot.com/p/playwrightpractice.html
    // assert succesful naviation
    await test.step('Navigate to web page and verify it is loaded', async () => {
      await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
      await expect(page).toHaveURL(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html',
      );
      await expect.soft(page).toHaveTitle('Automation Testing Practice: PlaywrightPractice');
    });

    // In Playwright Practice session group 1. getByRole() Locators pick a locator from section Navigation and click on it.
    // assert navigation has taken place
    await test.step('Click Products section from Navigation', async () => {
      await page.getByTestId('nav-products').getByRole('link', { name: 'Products' }).click();
      await expect(page).toHaveURL(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html#',
      );
    });

    // In Playwright Practice session group 2. getByText() Locators pick one of the paragraphs with colored text and assert its color
    await test.step('Verify text color group 2', async () => {
      await expect(
        page.getByText('colored text', { exact: true }),
        'Verify text color is shown as expected',
      ).toHaveCSS('color', 'rgb(255, 0, 0)');
    });

    // In Playwright Practice session group 3. getByLabel() Locators Locators check the unchecked radio button
    // assert is is checked now
    await test.step('Check radio button group 3', async () => {
      const expressRadioBtn = page.getByLabel('Express');
      await expressRadioBtn.click();
      await expect(expressRadioBtn, 'Verify Express radio button is checked').toBeChecked();
    });

    // In Playwright Practice session group 4. getByPlaceholder() Locators pick an input fill and assert it is editable
    // fill the input filed with text
    await test.step('Fill in input field and verify it is editable', async () => {
      const phoneNumberField = page.getByPlaceholder('Phone number', { exact: false });
      await expect(phoneNumberField, 'Ensure Phone number field is editable').toBeEditable();
      await phoneNumberField.fill('081662790');
    });

    // In Playwright Practice session group 5.getByAltText() Locators assert the image is visible
    await test.step('Verify image is visible', async () => {
      await expect(page.getByAltText('logo image'), 'Check if image is visible').toBeVisible();
    });

    // In Playwright Practice session group 6. getByTitle() Locators assert one of the elements' full text
    await test.step('Verify element in section 6 full text', async () => {
      await expect(
        page.getByTitle('Tooltip text'),
        'Verify text is displayed as expected',
      ).toHaveText('This text has a tooltip');
    });

    // In Playwright Practice session group 7. getByTestId() Locators assert one of the element contains part of its text
    await test.step('Verify element has part of a text', async () => {
      await expect(
        page.getByTestId('edit-profile-btn'),
        'Check if the element has part of a text',
      ).toContainText('Edit');
    });
  });
});
