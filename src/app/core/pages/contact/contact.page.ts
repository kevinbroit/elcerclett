import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.css']
})
export class ContactPage implements OnInit {
  lat: number = 41.404151;
  lng: number = 2.1531782;

  constructor() { }

  ngOnInit() {
  }

}
