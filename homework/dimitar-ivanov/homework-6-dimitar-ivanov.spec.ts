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

import { test, expect } from '@playwright/test';

test.describe('Test Suite 1', { tag: ['@UI'] }, () => {
  test('First Test Scenario', async ({ page }) => {
    await test.step('Check successful navigation', async () => {
      await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
      await expect(page, 'Practice page should open with the correct title').toHaveTitle(
        'Practice Page',
      );
      await expect(page, 'Browser should be on the Automation Practice page URL').toHaveURL(
        'https://rahulshettyacademy.com/AutomationPractice/',
      );
    });

    await test.step('Check radio button #2', async () => {
      page.locator('input[value="radio2"]').check();
      await expect
        .soft(page.locator('input[value="radio2"]'), 'Radio2 should be selected after checking it')
        .toBeChecked();
    });

    await test.step('Fill the input with "Bulgaria"', async () => {
      page.locator('input[id="autocomplete"]').fill('Bulgaria');
      await page.locator('.ui-menu-item').first().click();
      await expect
        .soft(
          page.locator('input[id="autocomplete"]'),
          'Selected autocomplete suggestion should appear in the country input',
        )
        .toHaveValue('Bulgaria');
    });

    await test.step('Select option #2 from the dropdown', async () => {
      page.locator('#dropdown-class-example').selectOption('Option2');
      await expect
        .soft(
          page.locator('#dropdown-class-example').locator('option:checked'),
          'Dropdown should show Option2 as the selected option',
        )
        .toHaveText('Option2');
    });

    await test.step('Check checkbox #3', async () => {
      page.locator('#checkBoxOption3').setChecked(true);
      await expect
        .soft(
          page.locator('#checkBoxOption3'),
          'Option3 checkbox should be checked after checking it',
        )
        .toBeChecked();
    });

    await test.step('Click on the "Hide" button', async () => {
      await expect.soft(
        page.locator('#displayed-text'),
        'Text box should be visible before clicking "Hide"',
      ).toBeVisible;
      page.locator('#hide-textbox').click();
      await expect.soft(
        page.locator('#displayed-text'),
        'Text box should be hidden after clicking "Hide"',
      ).not.toBeVisible;
    });

    await test.step('Hover over the "Mouse Hover" element', async () => {
      await expect
        .soft(
          page.locator('.mouse-hover-content a[href="#top"]'),
          '"Top" link should be hidden before hovering over "Mouse Hover"',
        )
        .not.toBeVisible();
      page.locator('#mousehover').hover();
      await expect
        .soft(
          page.locator('.mouse-hover-content a[href="#top"]'),
          '"Top" link should appear when hovering over "Mouse Hover"',
        )
        .toBeVisible();
    });
  });
});

test.describe('Test Suite 2', { tag: '@UI' }, () => {
  test('Second Test Scenario', async ({ page }) => {
    await test.step('Check successful navigation', async () => {
      await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
      await expect(page, 'Browser should be on the Playwright practice page URL').toHaveURL(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html',
      );
      await expect(page).toHaveTitle('Automation Testing Practice: PlaywrightPractice');
    });

    await test.step('Group 1 - Pick a locator from section Navigation and click on it', async () => {
      await page.getByRole('textbox', { name: 'Username:' }).fill('sample text');
      await expect
        .soft(
          page.getByRole('textbox', { name: 'Username:' }),
          'Username field should contain the text that was typed in',
        )
        .toHaveValue('sample text');

      await page.getByRole('checkbox', { name: 'Accept terms' }).check();
      await expect
        .soft(
          page.getByRole('checkbox', { name: 'Accept terms' }),
          '"Accept terms" checkbox should be checked after checking it',
        )
        .toBeChecked();
    });

    await test.step('Group 2 - Pick one of the paragraphs with colored text and assert its color', async () => {
      const paragraph = page.getByText('Another paragraph with');
      const coloredText = paragraph.getByText('colored text', { exact: true });

      await expect
        .soft(coloredText, 'Highlighted part of the paragraph should read "colored text"')
        .toHaveText('colored text');
      await expect
        .soft(coloredText, 'Highlighted text in the paragraph should be displayed in red')
        .toHaveCSS('color', 'rgb(255, 0, 0)');
    });

    await test.step('Group 3 - Check the unchecked radio button', async () => {
      await expect
        .soft(
          page.getByRole('radio', { name: 'Standard' }),
          '"Standard" radio button should be unchecked by default',
        )
        .not.toBeChecked();
      await page.getByRole('radio', { name: 'Standard' }).check();
      await expect
        .soft(
          page.getByRole('radio', { name: 'Standard' }),
          '"Standard" radio button should be selected after checking it',
        )
        .toBeChecked();
    });

    await test.step('Group 4 - Pick an input fill and assert it is editable', async () => {
      const textInputField = page.getByRole('textbox', { name: 'Enter your full name' });

      await expect
        .soft(textInputField, 'Full name field should be editable before typing into it')
        .toBeEditable();
      await textInputField.fill('some text');
      await expect
        .soft(textInputField, 'Full name field should contain "some text"')
        .toHaveValue('some text');
    });

    await test.step('Group 5 - Assert the image is visible', async () => {
      const logo = page.getByRole('img', { name: 'logo image' });
      await expect.soft(logo, 'Logo image should be visible (located by role)').toBeVisible();
      await expect
        .soft(page.getByAltText('logo image'), 'Logo image should be visible (located by alt text)')
        .toBeVisible();
    });

    await test.step('Group 6 - Assert one of the elements full text', async () => {
      const tooltipText = await page.getByTitle('Tooltip text');
      await expect
        .soft(tooltipText, 'Element with the tooltip should show its full text exactly')
        .toHaveText('This text has a tooltip');
    });

    await test.step('Group 7 - Assert one of the element contains part of its text', async () => {
      const price = page.getByTestId('product-card-2').getByTestId('product-price');
      await expect.soft(price, 'Product B price should be $29.99').toHaveText('$29.99');
    });
  });
});
