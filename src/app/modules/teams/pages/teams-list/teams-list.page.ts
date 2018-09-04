import {Component, OnInit, ViewChild} from '@angular/core';
import {Team} from '../../shared/team.model';
import {TeamService} from '../../shared/team.service';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {LoggerService} from '../../../../core/services/logger.service';
import {AppConfig} from '../../../../config/app.config';


@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.page.html',
  styleUrls: ['./teams-list.page.scss']
})

export class TeamsListPage implements OnInit {
  teams: Team[];
  error: string;

  constructor(private teamService: TeamService,
              private dialog: MatDialog,
              private router: Router ){
  }

  ngOnInit() {
    this.teamService.getTeams().subscribe((teams: Array<Team>) => {
      this.teams = teams;
    });
  }


  seeTeamDetails(team): void {
    if (team.default) {
      this.router.navigate([AppConfig.routes.teams + '/' + team.id]);
    }
  }
}
