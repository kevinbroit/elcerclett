import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';
import { SharedModule} from '../../shared/shared.module';
import { NewsRoutingModule} from './news-routing.module'

@NgModule({
  imports: [
    SharedModule,
    NewsRoutingModule
  ],
  declarations: [
    NewsDetailComponent
  ]
})
export class NewsModule { }
