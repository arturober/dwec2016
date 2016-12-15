import { AngularColorsPage } from './app.po';

describe('angular-colors App', function() {
  let page: AngularColorsPage;

  beforeEach(() => {
    page = new AngularColorsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
