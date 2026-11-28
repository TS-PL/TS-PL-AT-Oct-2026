// create the below 2 test scenarios and put them in a test suite
// put all groups of actions into a test.step
// use soft assertions, unless we are assrting a navigation has taken place
// try to add meaningful comments to all assertions
// you can find test execution command examples in the Readme.md file in project's main folder
// you can add -ui mode debug your tests during execution
// after execution view html report with command: 'npx playwright show-report' (if any tests failed report will open automaticaly)
// a trace artifact will be added to the report if any test has failed, you can use as well to debug your tests

import { test, expect } from '@playwright/test';

// first test scenario use CSS and XPATH selectors like page.locator('location string'):

// navigate to https://rahulshettyacademy.com/AutomationPractice/
test('First Scenario: Using CSS and XPATH selectors', async ({ page }) => {
  await test.step('Navigate to Automation Practice page', async () => {
    // Navigate to Automation Practice page
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // assert succesful naviation
    await expect(page).toHaveTitle('Practice Page');
  });

  // check radio button 2
  await test.step('Check radio button 2 and confirm it is checked', async () => {
    // assert Radio button 2 is checked
    const radioButton2 = page.locator('input[value="radio2"]');
    await radioButton2.check();
    // Ensure radio button is checked
    await expect.soft(radioButton2).toBeChecked();
  });

  // fill the input field with "Bulgaria"
  await test.step('Fill the autocomplete input and select the first suggestion', async () => {
    // Fill the autocomplete input
    const autocompleteInput = page.locator('#autocomplete');
    await autocompleteInput.fill('Bulgaria');

    // click on the first auto complete suggestion
    await autocompleteInput.press('ArrowDown');
    await autocompleteInput.press('Enter');

    // Verify the input value is "Bulgaria"
    await expect.soft(autocompleteInput).toHaveValue('Bulgaria');
  });

  await test.step('Select option 2 from the dropdown and confirm it is selected', async () => {
    // select option 2 from the dropdown
    const dropdown = page.locator('#dropdown-class-example');
    await dropdown.selectOption('option2');

    // Verify the selected option is "option2"
    await expect.soft(dropdown).toHaveValue('option2');
  });

  // check checkbox 3
  // Verify checkbox 3 is checked
  await test.step('Check checkbox 3 and confirm it is checked', async () => {
    // Check checkbox 3
    const checkBox3 = page.locator('#checkBoxOption3');
    await checkBox3.check();

    // Ensure checkbox is checked
    await expect.soft(checkBox3).toBeChecked();
  });

  // click on the Hide button
  // Verify the input element is now hidden
  await test.step('Click Hide button and ensure Hide/Show example input field is hidden', async () => {
    // Hide the text box
    const hideTextbox = page.locator('#hide-textbox');
    await hideTextbox.click();

    // Ensure the input is hidden
    const inputElement = page.locator('#displayed-text');
    await expect.soft(inputElement).toBeHidden();
  });

  // hover over the "Mouse Hover" element
  // Verify the "Top" link is now visible
  await test.step('Hover over "Mouse Hover" and ensure "Top" link is visible', async () => {
    // Hover over Mouse Hover button
    const mouseHoverButton = page.locator('#mousehover');
    await mouseHoverButton.hover();

    // Ensure Top link is visible
    const topLink = page.locator('a[href="#top"]');
    await expect.soft(topLink).toBeVisible({ timeout: 2000 });
  });
});

// second test scenario use only Playwright selectors like page.getByRole('button', { name: 'Вход' }).click();

// navigate to https://testautomationpractice.blogspot.com/p/playwrightpractice.html
// assert succesful naviation
test('Second Scenario: Using Playwright selectors', async ({ page }) => {
  await test.step('Navigate to the Automation Testing Practice page and confirm that the page is loaded', async () => {
    // Navigate to the practice page
    await page.goto(' https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    // In Playwright Practice session group 1. getByRole() Locators pick a locator from section Navigation and click on it.
    await expect(page).toHaveURL(
      'https://testautomationpractice.blogspot.com/p/playwrightpractice.html',
    );

    // assert navigation has taken place
    await expect(page).toHaveTitle('Automation Testing Practice: PlaywrightPractice');
  });

  // Click Products link
  await test.step('Click on the Products link and ensure it is clicked', async () => {
    const productsLink = page.getByRole('link', { name: 'Products' }).first();
    await productsLink.click();

    //Ensure Products link is focused after clicking on it
    await expect.soft(productsLink).toBeFocused();
  });
  // In Playwright Practice session group 2. getByText() Locators pick one of the paragraphs with colored text and assert its color
  await test.step('Verify colored text is red', async () => {
    // Ensure the colored text is red
    const colorText = page.getByText('colored text', { exact: true });
    await expect.soft(colorText).toHaveCSS('color', 'rgb(255, 0, 0)');
  });
  // In Playwright Practice session group 3. getByLabel() Locators Locators check the unchecked radio button
  // assert is is checked now
  await test.step('Check radio button Express and confirm it is checked', async () => {
    // Select the radio button
    const expressRadiobutton = page.getByLabel('Express');
    await expressRadiobutton.check();

    // Confirm button is checked
    await expect.soft(expressRadiobutton).toBeChecked();
  });

  // In Playwright Practice session group 4. getByPlaceholder() Locators pick an input fill and assert it is editable
  // fill the input field with text
  await test.step('Fill your full name in the input field and ensure it is editable', async () => {
    // Confirm input is editable
    const fullNameInput = page.getByPlaceholder('Enter your full name');
    await fullNameInput.click();
    await expect.soft(fullNameInput).toBeEditable();

    //Fill the input field with text
    await fullNameInput.fill('Daniela Dimitrova');

    // Confirm input value
    await expect.soft(fullNameInput).toHaveValue('Daniela Dimitrova');
  });

  // In Playwright Practice session group 5.getByAltText() Locators assert the image is visible
  await test.step('Verify Playwright logo image is visible', async () => {
    // Confirm image is visible
    const logoImage = page.getByAltText('logo image');
    await expect.soft(logoImage).toBeVisible();
  });
  // In Playwright Practice session group 6. getByTitle() Locators assert one of the elements' full text
  await test.step('Verify tooltip text', async () => {
    // Confirm element text
    const tooltipText = page.getByTitle('Home page link');
    await expect.soft(tooltipText).toHaveText('Home');
  });

  // In Playwright Practice session group 7. getByTestId() Locators assert one of the element contains part of its text
  await test.step('Verify element contains part of its text', async () => {
    // Confirm button contains text
    const editButton = page.getByTestId('edit-profile-btn');
    await expect.soft(editButton).toContainText('Edit');
  });
});
