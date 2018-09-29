import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppConfig} from '../../../config/app.config';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
})

export class PhotosPage implements OnInit {
  news:any[];

  constructor(private router: Router) {
  }

  ngOnInit() {

  }
}
