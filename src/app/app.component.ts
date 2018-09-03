import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';
import {AppConfig} from './config/app.config';
import {MatSnackBar} from '@angular/material';
import { MatIconRegistry } from "@angular/material/icon";
import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';
import { DomSanitizer } from "@angular/platform-browser";

declare const Modernizr;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  isOnline: boolean;

  constructor(private translateService: TranslateService,
              private title: Title,
              private meta: Meta,
              private snackBar: MatSnackBar,
              private router: Router,
              private matIconRegistry: MatIconRegistry,
                  private domSanitizer: DomSanitizer

            ) {
    this.isOnline = navigator.onLine;
    this.matIconRegistry.addSvgIcon(
      "tt",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/tt.svg")
    );
  }

  ngOnInit() {
    this.translateService.setDefaultLang('es');
    this.translateService.use('es');

    this.title.setTitle('EL CERCLE TT');
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        switch (event.urlAfterRedirects) {
          case '/':
            this.meta.updateTag({
              name: 'description',
              content: 'Website EL CERCLE TT'
            });
            break;
          case '/' + AppConfig.routes.heroes:
            this.title.setTitle('Heroes');
            this.meta.updateTag({
              name: 'description',
              content: 'List of super-heroes'
            });
            break;
        }
      }
    });

    this.checkBrowserFeatures();
  }

  checkBrowserFeatures() {
    let supported = true;
    for (const feature in Modernizr) {
      if (Modernizr.hasOwnProperty(feature) &&
        typeof Modernizr[feature] === 'boolean' && Modernizr[feature] === false) {
        supported = false;
        break;
      }
    }

    if (!supported) {
      this.translateService.get([String(_('updateBrowser'))]).subscribe((texts) => {
        this.snackBar.open(texts['updateBrowser'], 'OK');
      });
    }

    return supported;
  }
}
