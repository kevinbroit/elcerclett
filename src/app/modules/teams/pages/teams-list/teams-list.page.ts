import {Component, OnInit, ViewChild} from '@angular/core';
import {Team} from '../../shared/team.model';
import {TeamService} from '../../shared/team.service';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {LoggerService} from '../../../../core/services/logger.service';
import {AppConfig} from '../../../../config/app.config';

import {Player} from '../../../players/shared/player.model';
import {PlayerService} from '../../../players/shared/player.service';


@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.page.html',
  styleUrls: ['./teams-list.page.scss']
})

export class TeamsListPage implements OnInit {
  nbCols: number = 4;
  players: Player[];
  error: string;

  constructor(private playerService: PlayerService,
              private dialog: MatDialog,
              private router: Router ){
  }

  ngOnInit() {
    this.playerService.getPlayers().subscribe((players: Array<Player>) => {
      this.players = players;
    });

    this.setGridColsByWith(document.body.clientWidth);
  }

  onResize(event) {
    const width = event.target.innerWidth;
    this.setGridColsByWith(width);
  }

  setGridColsByWith(width){
    if (width < 950) {
      this.nbCols = 2;
    }

    if (width > 950) {
      this.nbCols = 4;
    }

    if (width < 750) {
      this.nbCols = 1;
    }
  }

  seePlayerDetails(player): void {
    if (player.default) {
      this.router.navigate([AppConfig.routes.players + '/' + player.id]);
    }
  }

  getTeams(player) : string{
    return player.teams.toString();
  }
}
