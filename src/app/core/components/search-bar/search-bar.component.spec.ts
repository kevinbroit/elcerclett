import {async, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {SearchBarComponent} from './search-bar.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {APP_CONFIG, AppConfig} from '../../../config/app.config';
import {AppRoutingModule} from '../../../app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {TestsModule} from '../../../shared/modules/tests.module';
import {Error404Page} from '../../pages/error404/error404.page';
import {HomePage} from '../../pages/home/home.page';
import {PlayerService} from '../../../modules/players/shared/player.service';

describe('PlayerSearchComponent', () => {
  let fixture;
  let component;
  let playerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestsModule,
        TranslateModule.forRoot(),
        AppRoutingModule
      ],
      declarations: [
        SearchBarComponent,
        HomePage,
        Error404Page
      ],
      providers: [
        {provide: APP_CONFIG, useValue: AppConfig},
        {provide: APP_BASE_HREF, useValue: '/'},
        PlayerService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    fixture.detectChanges();
    component = fixture.debugElement.componentInstance;
    playerService = TestBed.get(PlayerService);
  }));

  it('should create player search component', (() => {
    expect(component).toBeTruthy();
  }));

  it('should get all players', fakeAsync(() => {
    spyOn(playerService, 'getPlayers').and.returnValue(Promise.resolve(true));
    tick();
    fixture.detectChanges();
    expect(component.defaultPlayers.length).toBeGreaterThan(0);
    for (const player of component.defaultPlayers) {
      expect(player.default).toBe(true);
    }
  }));

  it('should filter players array', (() => {
    component.defaultPlayers = [
      {
        'id': 1,
        'name': 'batman',
        'default': true
      },
      {
        'id': 2,
        'name': 'spiderman',
        'default': false
      }
    ];
    expect(component.filterPlayers('batman').length).toBe(1);
    expect(component.filterPlayers('spiderman').length).toBe(0);
    expect(component.filterPlayers().length).toBe(2);
  }));
});
