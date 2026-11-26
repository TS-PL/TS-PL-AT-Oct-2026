import { test } from '@tests/fixtures';
import { Credentials } from '@tests/resources/enums/Credentials';

/*
  Page Object Model (POM) implementation with fixtures and step definitions.
*/

test(
  'Navigate to New Invoice Page',
  { tag: '@invoice' },
  async ({ sharedSteps, loginSteps, homeSteps }) => {
    await sharedSteps.navigateToSite();
    await loginSteps.login(Credentials.USERNAME, Credentials.PASSWORD);
    await homeSteps.navigateToNewInvoicePage();
  },
);

test(
  'Navigate to Clients Page',
  { tag: '@clients' },
  async ({ sharedSteps, loginSteps, homeSteps }) => {
    await sharedSteps.navigateToSite();
    await loginSteps.login(Credentials.USERNAME, Credentials.PASSWORD);
    await homeSteps.navigateToClientsPage();
  },
);

test(
  'Navigate to Articles Page',
  { tag: '@articles' },
  async ({ sharedSteps, loginSteps, homeSteps }) => {
    await sharedSteps.navigateToSite();
    await loginSteps.login(Credentials.USERNAME, Credentials.PASSWORD);
    await homeSteps.navigateToArticlesPage();
  },
);
