import { test } from '@tests/fixtures';

/*
  Page Object Model (POM) implementation with fixtures and step definitions.
*/

test(
  'Navigate to New Invoice Page',
  { tag: '@invoice' },
  async ({ sharedSteps, loginSteps, homeSteps }) => {
    await sharedSteps.navigateToSite();
    await loginSteps.login();
    await homeSteps.navigateToNewInvoicePage();
  },
);

test(
  'Navigate to Clients Page',
  { tag: '@clients' },
  async ({ sharedSteps, loginSteps, homeSteps }) => {
    await sharedSteps.navigateToSite();
    await loginSteps.login();
    await homeSteps.navigateToClientsPage();
  },
);

test(
  'Navigate to Articles Page',
  { tag: '@articles' },
  async ({ sharedSteps, loginSteps, homeSteps }) => {
    await sharedSteps.navigateToSite();
    await loginSteps.login();
    await homeSteps.navigateToArticlesPage();
  },
);
