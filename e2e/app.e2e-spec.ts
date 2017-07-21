import { TutorialAngular2Page } from './app.po';

describe('tutorial-angular2 App', () => {
  let page: TutorialAngular2Page;

  beforeEach(() => {
    page = new TutorialAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
