import {Component, Inject, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {APP_CONFIG, AppConfig} from '../../../config/app.config';
import {IAppConfig} from '../../../config/iapp.config';
import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';
import {ProgressBarService} from '../../services/progress-bar.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  title : string
  appConfig: any;
  menuItems: any[];
  progressBarMode: string;
  currentLang: string;


  constructor(@Inject(APP_CONFIG) appConfig: IAppConfig,
              private progressBarService: ProgressBarService,
              private translateService: TranslateService) {
    this.appConfig = appConfig;
    this.title = 'El CERCLE';
  }

  ngOnInit() {
    this.currentLang = this.translateService.currentLang;
    this.loadMenus();
    this.progressBarService.updateProgressBar$.subscribe((mode: string) => {
      this.progressBarMode = mode;
    });
  }

  changeLanguage(language: string): void {
    this.translateService.use(language).subscribe(() => {
      this.loadMenus();
    });
  }

  private loadMenus(): void {
    this.menuItems = [
      {link: '/' + AppConfig.routes.teams, name: _('teams')},
      {link: '/' + AppConfig.routes.photos, name: _('photos')},
      {link: '/' + AppConfig.routes.contact, name: _('contact.title')}
    ];
  }
}
