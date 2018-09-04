import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppConfig} from '../../../config/app.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
})

export class HomePage implements OnInit {
  news:any[];

  constructor(private router: Router) {
  }

  ngOnInit() {

  }
}
