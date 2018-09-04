import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeamDetailPage} from './pages/team-detail/team-detail.page';
import {TeamsListPage} from './pages/teams-list/teams-list.page';

const TeamsRoutes: Routes = [
  {path: '', component: TeamsListPage},
  {path: ':id', component: TeamDetailPage}
];

@NgModule({
  imports: [
    RouterModule.forChild(TeamsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class TeamRoutingModule {
}
 
