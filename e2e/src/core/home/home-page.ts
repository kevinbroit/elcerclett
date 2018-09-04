import {browser, by, element} from 'protractor';

export class HomePage {
  static navigateTo(): any {
    return browser.get('/');
  }

  static getNumberPlayers(): any {
    return element.all(by.css('#players-list mat-card')).count();
  }
}
