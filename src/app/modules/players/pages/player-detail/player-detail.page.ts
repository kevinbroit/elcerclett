import {Component, OnInit} from '@angular/core';
import {Player} from '../../shared/player.model';
import {PlayerService} from '../../shared/player.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.page.html',
  styleUrls: ['./player-detail.page.scss']
})

export class PlayerDetailPage implements OnInit {
  player: Player;
  constructor(private playerService: PlayerService,
              private location: Location,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const playerId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.playerService.getPlayers().subscribe((players: Player[]) => {
      this.player = players.find(x=> x.id == playerId);
    });
  }
  
  dynamicImport() {
    import('html2canvas').then((html2canvas: any) => {
      html2canvas.default(document.getElementById('playere-detail')).then((canvas) => {
        window.open().document.write('<img src="' + canvas.toDataURL() + '" />');
      });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
