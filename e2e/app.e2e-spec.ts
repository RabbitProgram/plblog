import { PlbolgPage } from './app.po';

describe('plbolg App', () => {
  let page: PlbolgPage;

  beforeEach(() => {
    page = new PlbolgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
