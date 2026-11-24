import { test } from '@tests/fixtures';
import { Page, expect } from '@playwright/test';
import HomePage from '@tests/pages/Home.page';
import NewInvoicePage from '@tests/pages/New.Invoice.page';
import ClientsPage from '@tests/pages/Clients.page';
import ArticlesPage from '@tests/pages/Articles.page';

export default class HomeSteps {
  public readonly page: Page;
  public readonly homePage: HomePage;
  public readonly newInvoicePage: NewInvoicePage;
  public readonly clientsPage: ClientsPage;
  public readonly articlesPage: ArticlesPage;

  constructor(
    page: Page,
    homePage: HomePage,
    newInvoicePage: NewInvoicePage,
    clientsPage: ClientsPage,
    articlesPage: ArticlesPage,
  ) {
    this.page = page;
    this.homePage = homePage;
    this.newInvoicePage = newInvoicePage;
    this.clientsPage = clientsPage;
    this.articlesPage = articlesPage;
  }

  async navigateToNewInvoicePage() {
    await test.step('Navigate New Invoice Page', async () => {
      await this.homePage.NEW_INVOICE_BUTTON.click();
      await expect(this.page).toHaveTitle(this.newInvoicePage.title);
    });
  }

  async navigateToClientsPage() {
    await test.step('Navigate to Clients Page', async () => {
      await this.homePage.CLIENTS_BUTTON.click();
      await expect(this.page).toHaveTitle(this.clientsPage.title);
    });
  }

  async navigateToArticlesPage() {
    await test.step('Navigate to Articles Page', async () => {
      await this.homePage.ARTICLES_BUTTON.click();
      await expect(this.page).toHaveTitle(this.articlesPage.title);
    });
  }
}
