import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TeamRoutingModule} from './teams-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {TeamService} from './shared/team.service';
import {TeamsListPage} from './pages/teams-list/teams-list.page';
import {TeamDetailPage} from './pages/team-detail/team-detail.page';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TeamRoutingModule
  ],
  declarations: [
    TeamsListPage,
    TeamDetailPage

  ],
  entryComponents: [

  ]
})

export class TeamsModule {
}
