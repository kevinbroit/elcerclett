import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';

import {throwIfAlreadyLoaded} from './module-import-guard';
import {SharedModule} from '../shared/shared.module';

import {HomePage} from './pages/home/home.page';
import {PhotosPage} from './pages/photos/photos.page';
import {ContactPage } from './pages/contact/contact.page';
import {Error404Page} from './pages/error404/error404.page';

import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {NewsListComponent} from './components/news-list/news-list.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';

import {ProgressBarService} from './services/progress-bar.service';
import {LoggerService} from './services/logger.service';
import {PlayerService} from '../modules/players/shared/player.service';
import {TeamService} from '../modules/teams/shared/team.service';
import {NewsService} from '../modules/news/shared/news.service';

import { Angular2ImageGalleryModule} from 'angular2-image-gallery';

@NgModule({
  imports: [
    ReactiveFormsModule,
    Angular2ImageGalleryModule,
    RouterModule,
    SharedModule,
    AgmCoreModule.forRoot({
     apiKey: 'AIzaSyBYYjKL3SbCMAXvHhWnfpwqxkecy'
   })
  ],
  declarations: [
    HomePage,
    PhotosPage,
    ContactPage,
    Error404Page,
    HeaderComponent,
    SearchBarComponent,
    FooterComponent,
    NewsListComponent,

  ],
  exports: [
    HeaderComponent,
    SearchBarComponent,
    FooterComponent,
    NewsListComponent
  ],
  providers: [
    PlayerService,
    TeamService,
    NewsService,
    LoggerService,
    ProgressBarService
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
