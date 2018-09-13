import {map, startWith} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {AppConfig} from '../../../config/app.config';
import {LoggerService} from '../../services/logger.service';
import {Player} from '../../../modules/players/shared/player.model';
import {PlayerService} from '../../../modules/players/shared/player.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [
    LoggerService
  ]
})

export class SearchBarComponent implements OnInit {

  defaultPlayers: Array<Player>;
  playerFormControl: FormControl;
  filteredPlayers: any;
  isSearchBarVisible : boolean;

  constructor(private playerService: PlayerService,
              private router: Router) {
    this.defaultPlayers = [];
    this.playerFormControl = new FormControl();
  }

  ngOnInit() {
    this.playerService.getPlayers().subscribe((players: Array<Player>) => {
      this.defaultPlayers = players.filter(player => player['default']);

      this.playerFormControl.valueChanges.pipe(
        startWith(null),
        map(value => this.filterPlayers(value)))
        .subscribe(playersFiltered => {
          this.filteredPlayers = playersFiltered;
        });
    });
  }

  filterPlayers(val: string): Player[] {
    return val ? this.defaultPlayers.filter(player => player.name.toLowerCase().indexOf(val.toLowerCase()) === 0 && player['default'])
      : this.defaultPlayers;
  }

  searchPlayer(player: Player): Promise<boolean> {
    LoggerService.log('Moved to player with id: ' + player.id);
    return this.router.navigate([AppConfig.routes.players + '/' + player.id]);
  }
}
