import {Component, OnInit, ViewChild} from '@angular/core';
import {News} from '../../../modules/news/shared/news.model';
import {NewsService} from '../../../modules/news/shared/news.service';
import {Router} from '@angular/router';
import {LoggerService} from '../../services/logger.service';
import {AppConfig} from '../../../config/app.config';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})

export class NewsListComponent implements OnInit {
  news: News[];
  error: string;

  constructor(private newsService: NewsService,
              private router: Router ){
                  console.log('news component');
  }

  ngOnInit() {
    this.newsService.getNews().subscribe((news: Array<News>) => {
      this.news = news;
    });
  }
}
