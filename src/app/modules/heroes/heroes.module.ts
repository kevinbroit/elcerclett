import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeroRoutingModule} from './heroes-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {HeroService} from './shared/hero.service';
import {HeroesListPage} from './pages/heroes-list/heroes-list.page';
import {HeroDetailPage} from './pages/hero-detail/hero-detail.page';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HeroRoutingModule
  ],
  declarations: [
    HeroesListPage,
    HeroDetailPage

  ],
  entryComponents: [

  ]
})

export class HeroesModule {
}