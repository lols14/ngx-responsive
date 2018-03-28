import { NgxResponsiveDemoPage } from './app.po';

describe('ngx-responsive-demo App', () => {
  let page: NgxResponsiveDemoPage;

  beforeEach(() => {
    page = new NgxResponsiveDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
