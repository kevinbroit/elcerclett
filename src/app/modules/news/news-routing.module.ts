import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsDetailComponent} from './pages/news-detail/news-detail.component';

const newsRoutes: Routes = [
  {path: ':id', component: NewsDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(newsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class NewsRoutingModule {
}
