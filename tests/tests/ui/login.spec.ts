import { test } from '@tests/fixtures';
import { Credentials } from '@tests/resources/enums/Credentials';
// import { username, password } from '../../../secrets';3
import { faker } from '@faker-js/faker';

test(
  'Login and Logout with user',
  { tag: '@login' },
  async ({ sharedSteps, loginSteps, homeSteps }) => {
    await sharedSteps.navigateToSite();
    await loginSteps.login(Credentials.USERNAME, Credentials.PASSWORD);
    await homeSteps.logout();
  },
);

[
  {
    info: 'Invalid credentials',
    username: faker.internet.email(),
    password: faker.internet.password(),
    errorMessage: 'Грешно потребителско име или парола. Моля, опитайте отново.',
  },
  {
    info: 'Empty password',
    username: faker.internet.email(),
    password: '',
    errorMessage: 'This field is required',
  },
  {
    info: 'Empty username',
    username: '',
    password: faker.internet.password(),
    errorMessage: 'Грешно потребителско име или парола. Моля, опитайте отново.',
  },
  {
    info: 'both empty',
    username: '',
    password: '',
    errorMessage: 'Грешно потребителско име или парола. Моля, опитайте отново.',
  },
].forEach(({ info, username, password, errorMessage }) => {
  test(
    `Unsuccessful login with ${info}`,
    {
      tag: '@login',
      annotation: [
        { type: 'Scenario ID', description: '1236332' },
        { type: 'information', description: 'This scenrio is important because...' },
        { type: 'username', description: username },
        { type: 'password', description: password },
      ],
    },
    async ({ sharedSteps, loginSteps }) => {
      await sharedSteps.navigateToSite();
      await loginSteps.loginFail(username, password);
      await loginSteps.validateErrorMessage(info, errorMessage);
    },
  );
});
