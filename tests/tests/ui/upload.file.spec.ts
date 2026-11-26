import { test } from '@tests/fixtures';
import { Credentials } from '@tests/resources/enums/Credentials';

[
  {
    info: 'pdf',
    username: Credentials.USERNAME,
    password: Credentials.PASSWORD,
    fileName: 'empty.pdf',
  },
  {
    info: 'doc',
    username: Credentials.USERNAME,
    password: Credentials.PASSWORD,
    fileName: 'empty.doc',
  },
  {
    info: 'jpeg',
    username: Credentials.USERNAME,
    password: Credentials.PASSWORD,
    fileName: 'empty.jpeg',
  },
].forEach(({ info, username, password, fileName }) => {
  test(
    `Upload Document file Type: ${info}`,
    {
      tag: '@upload',
      annotation: [
        { type: 'Scenario ID', description: '1236332' },
        { type: 'information', description: 'This scenrio is important because...' },
      ],
    },
    async ({ sharedSteps, loginSteps, homeSteps, documentSteps }) => {
      await sharedSteps.navigateToSite();
      await loginSteps.login(username, password);
      await homeSteps.navigateToDocumentsPage();
      await documentSteps.clickUploadDocumentButton();
      await documentSteps.uploadFile(fileName);
      await documentSteps.deleteFile(fileName);
    },
  );
});
