import { AcapellaDeployablePage } from './app.po';

describe('acapella-deployable App', () => {
  let page: AcapellaDeployablePage;

  beforeEach(() => {
    page = new AcapellaDeployablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
