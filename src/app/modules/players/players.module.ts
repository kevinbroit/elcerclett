import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PlayerRoutingModule} from './players-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {PlayerService} from './shared/player.service';
import {PlayersListPage} from './pages/players-list/players-list.page';
import {PlayerDetailPage} from './pages/player-detail/player-detail.page';



@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PlayerRoutingModule
    
  ],
  declarations: [
    PlayersListPage,
    PlayerDetailPage

  ],
  entryComponents: [

  ]
})

export class PlayersModule {
}
