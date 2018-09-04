import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayerDetailPage} from './pages/player-detail/player-detail.page';
import {PlayersListPage} from './pages/players-list/players-list.page';

const playersRoutes: Routes = [
  {path: '', component: PlayersListPage},
  {path: ':id', component: PlayerDetailPage}
];

@NgModule({
  imports: [
    RouterModule.forChild(playersRoutes)
  ],
  exports: [
    RouterModule
  ] 
})

export class PlayerRoutingModule {
}
