import {Component, OnInit, ViewChild} from '@angular/core';
import {Hero} from '../../shared/hero.model';
import {HeroService} from '../../shared/hero.service';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {LoggerService} from '../../../../core/services/logger.service';
import {AppConfig} from '../../../../config/app.config';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.page.html',
  styleUrls: ['./heroes-list.page.scss']
})

export class HeroesListPage implements OnInit {
  heroes: Hero[];
  error: string;

  constructor(private heroService: HeroService,
              private dialog: MatDialog,
              private router: Router ){
  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe((heroes: Array<Hero>) => {
      this.heroes = heroes;
    });
  }


  seeHeroDetails(hero): void {
    if (hero.default) {
      this.router.navigate([AppConfig.routes.heroes + '/' + hero.id]);
    }
  }
}
