import {Component, OnInit} from '@angular/core';
import {Team} from '../../shared/team.model';
import {TeamService} from '../../shared/team.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.page.html',
  styleUrls: ['./team-detail.page.scss']
})

export class TeamDetailPage implements OnInit {
  team: Team;
  constructor(private teamService: TeamService,
              private location: Location,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const teamId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.teamService.getTeams().subscribe((teams: Team[]) => {
      this.team = teams.find(x=> x.id == teamId);
    });
  }

  dynamicImport() {
    import('html2canvas').then((html2canvas: any) => {
      html2canvas.default(document.getElementById('teame-detail')).then((canvas) => {
        window.open().document.write('<img src="' + canvas.toDataURL() + '" />');
      });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
