import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppConfig} from './config/app.config';
import {HomePage} from './core/pages/home/home.page';
import {PhotosPage} from './core/pages/photos/photos.page';
import {ContactPage} from './core/pages/contact/contact.page';
import {Error404Page} from './core/pages/error404/error404.page';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HomePage},
  {path: AppConfig.routes.photos, component: PhotosPage},
  {path: AppConfig.routes.contact, component: ContactPage},
  {path: AppConfig.routes.error404, component: Error404Page},
  {path: AppConfig.routes.players, loadChildren: './modules/players/players.module#PlayersModule'},
  {path: AppConfig.routes.news, loadChildren: './modules/news/news.module#NewsModule'},
  {path: AppConfig.routes.teams, loadChildren: './modules/teams/teams.module#TeamsModule'},


  // otherwise redirect to 404
  {path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
