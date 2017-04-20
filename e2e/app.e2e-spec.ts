import { UnitTestingPage } from './app.po';

describe('unit-testing App', () => {
  let page: UnitTestingPage;

  beforeEach(() => {
    page = new UnitTestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
