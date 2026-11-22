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

test.describe('Homework 6 - Locators and Assertions', () => {
  test('Scenario 1: CSS and XPath selectors', async ({ page }) => {
    await test.step('Navigate to AutomationPractice page', async () => {
      await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
      // Hard assertion: verify initial navigation to the practice page
      await expect(page, 'Verify navigation to AutomationPractice URL').toHaveURL(
        'https://rahulshettyacademy.com/AutomationPractice/',
      );
    });

    await test.step('Check Radio button #2', async () => {
      const radio2 = page.locator('input[value="radio2"]');
      await radio2.check();
      // Soft assertion: verify radio button #2 is checked
      await expect.soft(radio2, 'Verify Radio button #2 is checked').toBeChecked();
    });

    await test.step('Autocomplete input for Bulgaria', async () => {
      const autocompleteInput = page.locator('#autocomplete');
      await autocompleteInput.fill('Bulgaria');
      const firstSuggestion = page.locator('//ul[@id="ui-id-1"]/li[1]/div');
      await firstSuggestion.click();
      // Soft assertion: verify the autocomplete input contains "Bulgaria" after selection
      await expect
        .soft(autocompleteInput, 'Verify autocomplete input value is Bulgaria')
        .toHaveValue('Bulgaria');
    });

    await test.step('Select option #2 from dropdown', async () => {
      const dropdown = page.locator('#dropdown-class-example');
      await dropdown.selectOption('option2');
      // Soft assertion: verify dropdown option #2 is selected
      await expect
        .soft(dropdown, 'Verify selected dropdown option is option2')
        .toHaveValue('option2');
    });

    await test.step('Check checkbox #3', async () => {
      const checkbox3 = page.locator('#checkBoxOption3');
      await checkbox3.check();
      // Soft assertion: verify checkbox #3 is checked
      await expect.soft(checkbox3, 'Verify checkbox #3 is checked').toBeChecked();
    });

    await test.step('Hide input element', async () => {
      const hideButton = page.locator('#hide-textbox');
      const displayedTextInput = page.locator('#displayed-text');
      await hideButton.click();
      // Soft assertion: verify the text input becomes hidden after clicking Hide
      await expect
        .soft(displayedTextInput, 'Verify input element is hidden after clicking Hide')
        .toBeHidden();
    });

    await test.step('Hover over Mouse Hover element', async () => {
      const mouseHoverBtn = page.locator('#mousehover');
      const topLink = page.locator('//div[@class="mouse-hover-content"]/a[text()="Top"]');
      await mouseHoverBtn.hover();
      // Soft assertion: verify the "Top" link becomes visible on hover
      await expect.soft(topLink, 'Verify Top link is visible after hovering').toBeVisible();
    });
  });

  // second test scenario use only Playwright selectors like page.getByRole('button', { name: 'Вход' }).click();
  test('Scenario 2: Using only Playwright selectors', async ({ page }) => {
    await test.step('Navigate to Automation Testing Practice page', async () => {
      await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
      // Hard assertion: verify navigation to the target PlaywrightPractice page
      await expect(page, 'Verify navigation to Playwright Practice URL').toHaveURL(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html',
      );
    });

    // Group 2 - getByText(): pick one of the paragraphs with colored text and assert its color
    await test.step('Assert paragraph color using getByText', async () => {
      const coloredText = page.getByText('colored text');
      await coloredText.scrollIntoViewIfNeeded();
      // Soft assertion: verify the colored text has red CSS color (rgb(255, 0, 0))
      await expect
        .soft(coloredText, "Verify colored text's color using getByText")
        .toHaveCSS('color', 'rgb(255, 0, 0)');
    });

    // Group 3 - getByLabel(): check the unchecked radio button and assert it is checked now
    await test.step('Check radio button using getByLabel', async () => {
      const radioButton = page.getByLabel('Express');
      await radioButton.check();
      // Soft assertion: verify the radio button is checked after check()
      await expect
        .soft(radioButton, 'Verify radio button is checked using getByLabel')
        .toBeChecked();
    });

    // Group 4 - getByPlaceholder(): pick an input field, assert it is editable, and fill it with text
    await test.step('Verify input is editable and fill it using getByPlaceholder', async () => {
      const inputField = page.getByPlaceholder('Enter your full name');
      // Soft assertion: verify the input field is editable before filling text
      await expect.soft(inputField, 'Verify input field is editable').toBeEditable();
      await inputField.fill('Teodora Tsoneva');
    });

    // Group 5 - getByAltText(): assert the image is visible
    await test.step('Assert image visibility using getByAltText', async () => {
      const image = page.getByAltText('logo image');
      // Soft assertion: verify the image is visible on the page
      await expect.soft(image, 'Verify image is visible using getByAltText').toBeVisible();
    });

    // Group 6 - getByTitle(): assert one of the elements' full text
    await test.step('Assert element full text using getByTitle', async () => {
      const titleElement = page.getByTitle('Click to save your changes');
      // Soft assertion: verify the element's full visible text
      await expect
        .soft(titleElement, "Verify element's full text using getByTitle")
        .toHaveText('Save');
    });

    // Group 7 - getByTestId(): assert one of the element contains part of its text
    await test.step('Assert element partial text using getByTestId', async () => {
      const testIdElement = page.getByTestId('profile-name');
      // Soft assertion: verify the element's text contains "John"
      await expect
        .soft(testIdElement, "Verify element's text contains partial text using getByTestId")
        .toContainText('John');
    });

    // Group 1 - getByRole(): pick a locator from section Navigation, click on it, and assert navigation (hard assertion!)
    await test.step('Assert navigation using getByRole', async () => {
      const navigationLink = page.getByRole('link', { name: 'Products' }).first();
      await navigationLink.click();
      // Hard assertion: verify URL after clicking the Navigation link
      await expect(page, 'Verify navigation after clicking Navigation link').toHaveURL(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html#',
      );
    });
  });
});
