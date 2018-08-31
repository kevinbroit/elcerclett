import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  routes: {
    heroes: 'heroes',
    error404: '404'
  },
  endpoints: {
    heroes:'./assets/heroes.json'
    //heroes: 'https://elcercle.tk/api.php/heroes'
  },
  repositoryURL:'',
  snackBarDuration: 3000,
};
