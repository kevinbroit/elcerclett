import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  routes: {
    players: 'players',
    teams:'teams',
    news:'news',
    photos:'photos',
    contact:'contact',
    error404: '404'
  },
  endpoints: {
    players:'./assets/players.json',
    teams:'./assets/teams.json',
    news:'./assets/news.json'
    //players: 'https://elcercle.tk/api.php/players'
  },
  repositoryURL:'',
  snackBarDuration: 3000,
};
/*
Flickr API Call
===============
Based on my account: kevinbroit

- GET ALL PUBLIC PHOTOS WITH URL (SIZE: M, L):

https://api.flickr.com/services/rest?method=flickr.photos.search
&user_id=147962491@N07
&api_key=abf78756a81ca9dcb2c051c9bc61c6ec
&extras=url_m,url_l
&format=json

- GET ALL PHOTOS BY ALBUM_ID PHOTOS WITH URL (SIZE: M, L):

https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos
&user_id=147962491@N07
&api_key=d47af61524de3b344c995d2b1546486c
&photoset_id=72157701533591674
&extras=url_m,url_l
&format=json

*/
