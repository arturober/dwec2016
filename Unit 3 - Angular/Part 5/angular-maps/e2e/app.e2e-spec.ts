import { AngularMapsPage } from './app.po';

describe('angular-maps App', function() {
  let page: AngularMapsPage;

  beforeEach(() => {
    page = new AngularMapsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
