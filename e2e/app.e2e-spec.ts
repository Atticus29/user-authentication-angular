import { UserAuthenticationAngularPage } from './app.po';

describe('user-authentication-angular App', () => {
  let page: UserAuthenticationAngularPage;

  beforeEach(() => {
    page = new UserAuthenticationAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
