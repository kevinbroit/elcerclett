import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {ProgressBarService} from './services/progress-bar.service';
import {LoggerService} from './services/logger.service';
import {HomePage} from './pages/home/home.page';
import {ContactPage } from './pages/contact/contact.page';

import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {NewsListComponent} from './components/news-list/news-list.component';

import {Error404Page} from './pages/error404/error404.page';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {PlayerService} from '../modules/players/shared/player.service';
import {TeamService} from '../modules/teams/shared/team.service';
import {NewsService} from '../modules/news/shared/news.service';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    AgmCoreModule.forRoot({
     apiKey: 'AIzaSyBYYjKL3SbCMAXvHhWnfpwqxkecy'
   })
  ],
  declarations: [
    HomePage,
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
