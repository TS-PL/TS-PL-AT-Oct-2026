import { test } from '@playwright/test';
import path from 'path';

// documentation: https://playwright.dev/docs/input

test.only('Actions Examples', async ({ page }) => {
  await page.goto('https://st2016.inv.bg/');
  //   await page.goto('https://www.wikipedia.org/');

  // Mouse clicks:
  await page.getByRole('button', { name: 'Вход' }).click();
  await page.locator('#persistent').dblclick();
  await page.locator('#persistent').click({ button: 'right' });
  await page.locator('#newpass2').click({ button: 'middle' });
  await page.locator('#newpass2').click({ modifiers: ['Shift'] });
  await page.locator('#newpass2').click({ modifiers: ['ControlOrMeta'] });

  // Text Input
  await page.locator('#loginusername').fill('test user');

  // Checkbox and Radio button
  await page.locator('.selenium-language-radio-button-EN').check();
  await page.locator('#persistent').check();

  // Focus Element
  await page.locator('#loginpassword').focus();

  // Hover Element
  await page.getByRole('link', { name: 'Контакти' }).hover();

  // Drag and Drop
  await page.locator('#newpass2').dragTo(page.locator('#loginusername'));

  // Select from Dropdown
  await page.locator('#searchLanguage').selectOption('Български');
  await page.locator('#searchLanguage').selectOption('af');
  await page.locator('#searchLanguage').selectOption({ label: 'Blue' });
  await page.locator('#searchLanguage').selectOption(['Български', 'Afrikaans', 'العربية']);

  // Keyboard Actions
  await page.locator('#loginusername').press('U');
  await page.locator('#loginusername').press('Shift+A');
  await page.locator('#loginusername').press('Enter');
  await page.locator('#loginusername').press('Control+ArrowUp');
  await page.locator('#loginusername').press('$');

  // Scrolling
  await page.getByRole('link', { name: 'Контакти' }).scrollIntoViewIfNeeded();

  // Upload one File
  await page.locator('#loginusername').fill('karamfilovs@gmail.com');
  await page.locator('#loginpassword').fill('111111');
  await page.getByRole('button', { name: 'Вход' }).click();

  await page.getByRole('link', { name: 'Документи' }).click();
  await page.locator('.newbtn.selenium-new-doc').click();

  await page
    .locator('.selenium-file-input')
    .setInputFiles(path.join(__dirname, 'xpath.css.dom.cheat.sheet.pdf'));

  // select multiple files
  await page
    .locator('.selenium-file-input')
    .setInputFiles([
      path.join(__dirname, 'xpath.css.dom.cheat.sheet.pdf'),
      path.join(__dirname, 'actions.spec.ts'),
    ]);

  // select a directory
  await page
    .locator('.selenium-file-input')
    .setInputFiles(path.join(__dirname, '..', 'lesson-13-locators-and-actions'));

  // remove all the selected file
  await page.locator('.selenium-file-input').setInputFiles([]);
});
