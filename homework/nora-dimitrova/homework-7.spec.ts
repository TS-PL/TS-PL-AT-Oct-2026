//npx playwright test homework-7.spec.ts
import { faker } from '@faker-js/faker';
import { test } from '@tests/fixtures';
import { Credentials } from '@tests/resources/enums/Credentials';

const plans = [
  {
    name: 'Корпоративен',
    price: 'по договаряне',
    clients: 'неограничени',
    invoices: 'неограничени',
    employees: 'неограничени',
    features: ['REST API за достъп', 'допълнително архивиране', 'приоритетен support'],
  },
  {
    name: 'Бизнес',
    price: '28 €/месец',
    clients: '1000 клиента',
    invoices: '1000 фактури/месец',
    employees: '25 служителя',
    features: ['с Ваше лого', 'с електронен подпис'],
  },
  {
    name: 'Малък бизнес',
    price: '8 €/месец',
    clients: '150 клиента',
    invoices: '150 фактури/месец',
    employees: '10 служителя',
    features: ['с Ваше лого', 'с електронен подпис'],
  },
  {
    name: 'Персонален',
    price: '4 €/месец',
    clients: '15 клиента',
    invoices: '15 фактури/месец',
    employees: '1 служител',
    features: ['с Ваше лого'],
  },
  {
    name: 'Безплатен',
    price: '0 €/месец',
    clients: '5 клиента',
    invoices: '5 фактури/месец',
    employees: '1 служител',
    features: [],
  },
];

test('Verify all payment plans', async ({ sharedSteps, loginSteps, homeSteps, plansSteps }) => {
  await sharedSteps.navigateToSite();
  await loginSteps.login(Credentials.USERNAME, Credentials.PASSWORD);
  await homeSteps.navigateToNewInvoicePage();
  await plansSteps.openPlansPage();

  for (const plan of plans) {
    await plansSteps.verifyPlanDetails(plan);
  }
});

test('Create a new client and delete all five if the limit is reached', async ({
  sharedSteps,
  loginSteps,
  homeSteps,
  clientsSteps,
}) => {
  const clientName = `Homework 7 ${faker.string.alphanumeric(10)}`;

  await sharedSteps.navigateToSite();
  await loginSteps.login(Credentials.USERNAME, Credentials.PASSWORD);
  await homeSteps.navigateToClientsPage();
  await clientsSteps.clearClientsIfAtLimit();
  await clientsSteps.openNewClientForm();
  await clientsSteps.createClient(clientName);
  await clientsSteps.openClientsList();
  const clientsWereCleared = await clientsSteps.clearClientsIfAtLimit();
  if (!clientsWereCleared) {
    await clientsSteps.verifyClientRemains(clientName);
  }
});
