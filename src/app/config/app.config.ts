import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  routes: {
    players: 'players',
    teams:'teams',
    error404: '404'
  },
  endpoints: {
    players:'./assets/players.json',
    teams:'./assets/teams.json'
    //players: 'https://elcercle.tk/api.php/players'
  },
  repositoryURL:'',
  snackBarDuration: 3000,
};
