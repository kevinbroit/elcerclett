import {Component, OnInit} from '@angular/core';
import {Hero} from '../../shared/hero.model';
import {HeroService} from '../../shared/hero.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.page.html',
  styleUrls: ['./hero-detail.page.scss']
})

export class HeroDetailPage implements OnInit {
  hero: Hero;
  constructor(private heroService: HeroService,
              private location: Location,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const heroId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.heroService.getHeroes().subscribe((heros: Hero[]) => {
      this.hero = heros.find(x=> x.id == heroId);
    });
  }
  
  dynamicImport() {
    import('html2canvas').then((html2canvas: any) => {
      html2canvas.default(document.getElementById('heroe-detail')).then((canvas) => {
        window.open().document.write('<img src="' + canvas.toDataURL() + '" />');
      });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
