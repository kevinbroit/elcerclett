import {PlayersListPage} from './players-list-page';

describe('Home page', function () {
  let page;

  beforeEach(() => {
    page = new PlayersListPage();
  });

  it('should contains equal or more players than default ones', () => {
    PlayersListPage.navigateTo();
    expect<any>(PlayersListPage.getNumberPlayers()).toBeGreaterThanOrEqual(8);
  });
});
