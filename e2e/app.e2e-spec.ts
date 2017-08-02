import { JobDescriptionStorageAppPage } from './app.po';

describe('job-description-storage-app App', () => {
  let page: JobDescriptionStorageAppPage;

  beforeEach(() => {
    page = new JobDescriptionStorageAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
