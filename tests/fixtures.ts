import { test as baseTest } from '@playwright/test';

import LoginPage from '@tests/pages/Login.page';
import HomePage from '@tests/pages/Home.page';
import NewInvoicePage from '@tests/pages/New.Invoice.page';
import ClientsPage from '@tests/pages/Clients.page';
import ArticlesPage from '@tests/pages/Articles.page';
import DocumentsPage from '@tests/pages/Documents.page';
import PlansPage from '@tests/pages/Plans.page';

import SharedSteps from '@tests/steps/Shared.steps';
import LoginSteps from '@tests/steps/Login.steps';
import HomeSteps from '@tests/steps/Home.steps';
import DocumentSteps from '@tests/steps/Document.steps';
import PlansSteps from '@tests/steps/Plans.steps';
import ClientsSteps from '@tests/steps/Clients.steps';

type MyFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  newInvoicePage: NewInvoicePage;
  clientsPage: ClientsPage;
  articlesPage: ArticlesPage;
  documentsPage: DocumentsPage;
  plansPage: PlansPage;

  sharedSteps: SharedSteps;
  loginSteps: LoginSteps;
  homeSteps: HomeSteps;
  documentSteps: DocumentSteps;
  plansSteps: PlansSteps;
  clientsSteps: ClientsSteps;
};

export const test = baseTest.extend<MyFixtures>({
  loginPage: async ({ page, context }, use) => {
    await use(new LoginPage(page, context));
  },
  homePage: async ({ page, context }, use) => {
    await use(new HomePage(page, context));
  },
  newInvoicePage: async ({ page, context }, use) => {
    await use(new NewInvoicePage(page, context));
  },
  clientsPage: async ({ page, context }, use) => {
    await use(new ClientsPage(page, context));
  },
  articlesPage: async ({ page, context }, use) => {
    await use(new ArticlesPage(page, context));
  },
  documentsPage: async ({ page, context }, use) => {
    await use(new DocumentsPage(page, context));
  },
  plansPage: async ({ page, context }, use) => {
    await use(new PlansPage(page, context));
  },

  sharedSteps: async ({ page, loginPage }, use) => {
    await use(new SharedSteps(page, loginPage));
  },
  loginSteps: async ({ page, loginPage, homePage }, use) => {
    await use(new LoginSteps(page, loginPage, homePage));
  },
  documentSteps: async ({ page, documentsPage }, use) => {
    await use(new DocumentSteps(page, documentsPage));
  },
  plansSteps: async ({ page, newInvoicePage, plansPage }, use) => {
    await use(new PlansSteps(page, newInvoicePage, plansPage));
  },
  clientsSteps: async ({ page, clientsPage }, use) => {
    await use(new ClientsSteps(page, clientsPage));
  },
  homeSteps: async (
    { page, loginPage, homePage, newInvoicePage, clientsPage, articlesPage, documentsPage },
    use,
  ) => {
    await use(
      new HomeSteps(
        page,
        loginPage,
        homePage,
        newInvoicePage,
        clientsPage,
        articlesPage,
        documentsPage,
      ),
    );
  },
});
