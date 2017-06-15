import { BaselineAngularPage } from './app.po';

describe('baseline-angular App', () => {
  let page: BaselineAngularPage;

  beforeEach(() => {
    page = new BaselineAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
