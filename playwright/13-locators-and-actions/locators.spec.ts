import { test } from '@playwright/test';

// documentation: https://playwright.dev/docs/locators
// best practices: https://playwright.dev/docs/best-practices#best-practices

test('Locator Examples', async ({ page }) => {
  await page.goto('https://st2016.inv.bg/');
  // await page.goto('https://www.imdb.com/');
  // await page.goto('https://playwright.dev/');

  /*
    Locators (Xpath or CSS)
    All locators in Playwright by default work with elements in the Shadow DOM. The exceptions are: Locating by XPath does not pierce shadow roots. Closed-mode shadow roots are not supported.
  */

  // find by ID
  await page.locator('//*[@id="loginusername"]').fill('username'); // Xpath
  await page.locator('#loginusername').fill('username'); // CSS

  // find by Attribute - Name
  await page.locator('//*[@name="password"]').fill('password'); // Xpath
  await page.locator('[name=password]').fill('password'); // CSS

  // find by Attribute - Autocomplete
  await page.locator('//*[@autocomplete="current-password"]').fill('password'); // Xpath
  await page.locator('[autocomplete="current-password"]').fill('123456'); // CSS

  // find by Class
  await page
    .locator(
      '//*[@class="selenium-forgotten-page tw-text-sm tw-font-medium tw-text-[#0d83e8] hover:tw-text-[#0a5d9b]"]',
    )
    .hover(); // Xpath with all classes
  await page.locator('//*[contains(@class, "selenium-forgotten-page")]').hover(); // Xpath 1 class of many
  await page.locator('.selenium-forgotten-page').hover(); // CSS

  // find by Text
  await page.locator('//*[contains(text(), "Забравена парола?")]').click(); // XPath
  await page.locator('text="Забравена парола?"').click(); // CSS

  // Playwright build-in locators

  // find by Role
  await page.getByRole('button', { name: 'Вход' }).click();
  await page.getByRole('checkbox', { name: 'запомни входа от това устройство' }).click();

  // find by Label
  await page.getByLabel('Toggle password visibility').click();

  // find by Placeholder (imdb.com)
  await page.getByPlaceholder('Search IMDb').fill('Avatar');

  // find by Text
  await page.getByText('парола?').click(); // find any element which contains this text
  await page.getByText('Забравена парола?', { exact: true }).click(); // find element with this exact text only

  // find by Alt Text
  await page.getByAltText('Inv.bg').click();

  // find by Title (playwright.dev)
  await page.getByTitle('system mode').click();
  await page.getByTitle('light mode').click();

  // find by Test ID (imdb.com)
  await page.getByTestId('suggestion-search').fill('Terminator');

  // Filter Locators:
  await page.locator('.tw-block').filter({ hasText: 'Имейл' }).click();

  // Chain Locator
  await page
    .locator('//*[contains(@class, "selenium")]')
    .getByRole('button', { name: 'Вход' })
    .click();

  // find N element
  console.log(await page.locator('.tw-block').count()); // count found elements
  console.log((await page.locator('.tw-block').all()).toString()); // print the found elements

  await page.locator('.tw-block').first().fill('test');
  await page.locator('.tw-block').last().hover();
  await page.locator('.tw-block').nth(4).hover();
});
