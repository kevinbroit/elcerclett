import {browser, by, element} from 'protractor';
import {AppConfig} from '../../../../src/app/config/app.config';

export class PlayersListPage {
  static navigateTo(): any {
    return browser.get(AppConfig.routes.players);
  }

  static getNumberPlayers(): any {
    return element.all(by.css('#left mat-list-item')).count();
  }
}
