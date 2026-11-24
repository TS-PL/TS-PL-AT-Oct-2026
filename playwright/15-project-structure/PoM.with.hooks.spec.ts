import { test, expect } from '@playwright/test';
import LoginPage from '@tests/pages/Login.page';
import HomePage from '@tests/pages/Home.page';
import NewInvoicePage from '@tests/pages/New.Invoice.page';
import ClientsPage from '@tests/pages/Clients.page';
import ArticlesPage from '@tests/pages/Articles.page';

/*
  Page Object Model (POM) implementation with hooksfor Playwright tests.
*/

let loginPage: LoginPage;
let homePage: HomePage;
let newInvoicePage: NewInvoicePage;
let clientsPage: ClientsPage;
let articlesPage: ArticlesPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page, page.context());
  homePage = new HomePage(page, page.context());
  newInvoicePage = new NewInvoicePage(page, page.context());
  clientsPage = new ClientsPage(page, page.context());
  articlesPage = new ArticlesPage(page, page.context());
});

test.describe('Test Suite #1', { tag: ['@suite', '@smoke', '@regression'] }, () => {
  test.use({ baseURL: 'https://st2016.inv.bg' });

  test('Navigate to New Invoice Page', { tag: '@invoice' }, async ({ page }) => {
    await test.step('Navigate to Site', async () => {
      await page.goto('/');
      await expect(page).toHaveTitle(loginPage.title);
    });

    await test.step('Login', async () => {
      await loginPage.EMAIL_INPUT.fill('karamfilovs@gmail.com');
      await loginPage.PASSWORD_INPUT.fill('111111');
      await loginPage.LOGIN_BUTTON.click();
      await expect(page).toHaveTitle(homePage.title);
    });

    await test.step('Navigate New Invoice Page', async () => {
      await homePage.NEW_INVOICE_BUTTON.click();
      await expect(page).toHaveTitle(newInvoicePage.title);
    });
  });

  test('Navigate to Clients Page', { tag: '@invoice' }, async ({ page }) => {
    await test.step('Navigate to Site', async () => {
      await page.goto('/');
      await expect(page).toHaveTitle(loginPage.title);
    });

    await test.step('Login', async () => {
      await loginPage.EMAIL_INPUT.fill('karamfilovs@gmail.com');
      await loginPage.PASSWORD_INPUT.fill('111111');
      await loginPage.LOGIN_BUTTON.click();
      await expect(page).toHaveTitle(homePage.title);
    });

    await test.step('Navigate to Clients Page', async () => {
      await homePage.CLIENTS_BUTTON.click();
      await expect(page).toHaveTitle(clientsPage.title);
    });
  });

  test('Navigate to Articles Page', { tag: '@invoice' }, async ({ page }) => {
    await test.step('Navigate to Site', async () => {
      await page.goto('/');
      await expect(page).toHaveTitle(loginPage.title);
    });

    await test.step('Login', async () => {
      await loginPage.EMAIL_INPUT.fill('karamfilovs@gmail.com');
      await loginPage.PASSWORD_INPUT.fill('111111');
      await loginPage.LOGIN_BUTTON.click();
      await expect(page).toHaveTitle(homePage.title);
    });

    await test.step('Navigate to Articles Page', async () => {
      await homePage.ARTICLES_BUTTON.click();
      await expect(page).toHaveTitle(articlesPage.title);
    });
  });
});
