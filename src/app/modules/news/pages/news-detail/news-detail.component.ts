import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {News} from '../../shared/news.model'
import {NewsService} from '../../shared/news.service'
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
    news: News;
    constructor(private newsService: NewsService,
                private location: Location,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
      const newsId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.newsService.getNews().subscribe((players: News[]) => {
        this.news = players.find(x=> x.id == newsId);
      });
    }

    goBack(): void {
      this.location.back();
    }
}
