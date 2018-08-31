import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from '../../../modules/heroes/shared/hero.model';
import {HeroService} from '../../../modules/heroes/shared/hero.service';
import {AppConfig} from '../../../config/app.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
})

export class HomePage implements OnInit {
  heroes: Hero[] = null;
  canVote = false;

  constructor(private heroService: HeroService,
              private router: Router) {

  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });

  }

  seeHeroDetails(hero): void {
    if (hero.default) {
      this.router.navigate([AppConfig.routes.heroes + '/' + hero.id]);
    }
  }
}
