import { AngularProductsPage } from './app.po';

describe('angular-products App', function() {
  let page: AngularProductsPage;

  beforeEach(() => {
    page = new AngularProductsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
