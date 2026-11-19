import { test, expect } from '@playwright/test';

// original jest library documentation: https://jestjs.io/docs/expect
// playwright documentation: https://playwright.dev/docs/test-assertions

test('Assertions Example', async ({ page }) => {
  await page.goto('https://st2016.inv.bg/');
  // expect login page to be loaded successfully

  await page.locator('#loginusername').fill('karamfilovs@gmail.com');
  await page.locator('#loginpassword').fill('111111');
  await page.getByRole('button', { name: 'Вход' }).click();
  // expect homepage to be loaded successfully

  await page.getByRole('link', { name: 'Нова Фактура', exact: true }).click();
  // expect new invoice page to be loaded successfully

  // Non retrying Assertions:
  expect(true).toBeTruthy();
  // expect(false).toBeTruthy();
  expect(1).toBe(1);
  expect('success').toBe('success');
  expect('Playwright').toContain('Play');
  expect(await page.getByRole('heading', { name: 'Нова фактура' }).isVisible());

  // Auto retrying Assertions:

  // Polling
  await expect
    .poll(
      async () => {
        const status: boolean = await page
          .getByRole('heading', { name: 'Нова фактура' })
          .isVisible();
        return status;
      },
      {
        timeout: 5 * 1000,
        intervals: [1 * 1000, 2 * 1000, 3 * 1000, 4 * 1000, 5 * 1000],
      },
    )
    .toBeTruthy();

  // page values:
  await expect(page).toHaveTitle('Нова фактура - QA Ground');
  await expect(page).toHaveURL('https://st2016.inv.bg/invoices/new');

  // check element state:
  await expect(page.getByRole('heading', { name: 'Нова фактура' })).toBeVisible();
  await expect(page.locator('#headline3')).toBeHidden();
  await expect(page.locator('#client_firmname')).toBeEnabled();
  await expect(page.locator('#inv_number')).toBeDisabled();
  await expect(page.locator('#client_firmname')).toBeEditable();

  await page.locator('#is_person').check();
  await expect(page.locator('#is_person')).toBeChecked();

  await page.locator('#person_name').focus();
  await expect(page.locator('#person_name')).toBeFocused();

  // element text assertion
  // await expect(page.getByRole('heading', { name: 'Нова фактура' })).toHaveText('Нова фактура');  // Dont do this!
  await expect(page.locator('//*[@id="headline2"]/h2')).toHaveText('Нова фактура'); // complete text value
  await expect(page.locator('//*[@id="headline2"]/h2')).toContainText('нова', { ignoreCase: true }); // part of text + ignore case sensitive
  await expect(page.locator('#person_name')).toBeEmpty(); // has no text

  // expect custom timeout
  await expect(page.locator('//*[@id="headline2"]/h2')).toHaveText('Нова фактура', { timeout: 7 });

  // dropdown selected value
  await expect(page.locator('#money_currency')).toHaveValue('EUR');
  await page.locator('#money_currency').selectOption('лв.');
  await expect(page.locator('#money_currency')).toHaveValue('лв.');
  // await expect(page.locator('#money_currency')).toHaveValues(['лв.', 'EUR']);

  // element atribute values
  await expect(page.getByRole('button', { name: 'Създай фактурата' })).toHaveId('act_create');
  await expect(page.getByRole('button', { name: 'Създай фактурата' })).toHaveClass(
    'invform_submit_btn btn_green selenium-submit-invoice',
  );
  await expect(page.getByRole('button', { name: 'Създай фактурата' })).toHaveCSS(
    'color',
    'rgb(255, 255, 255)',
  );
  await expect(page.getByRole('button', { name: 'Създай фактурата' })).toHaveCSS(
    'border',
    '0.571429px solid rgb(6, 78, 10)',
  );
  await expect(page.getByRole('button', { name: 'Създай фактурата' })).toHaveAttribute(
    'data-additional-text',
    'и пренеси плащанията',
  );

  // check something is Not a certain way
  await page.locator('#is_person').uncheck();
  await expect(page.locator('#is_person')).not.toBeChecked();

  // Soft Assertion
  await expect.soft(page.locator('#is_person')).not.toBeChecked();

  // custom expect message
  await expect(
    page.locator('#is_person'),
    'Checkbox "Is a real person" is NOT checked.',
  ).not.toBeChecked();
});
