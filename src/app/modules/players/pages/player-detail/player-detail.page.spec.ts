import {async, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {PlayersModule} from '../../players.module';
import {TestsModule} from '../../../../shared/modules/tests.module';
import {TranslateModule} from '@ngx-translate/core';
import {PlayerService} from '../../shared/player.service';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {APP_CONFIG, AppConfig} from '../../../../config/app.config';
import {PlayerDetailPage} from './player-detail.page';

describe('PlayerDetailPage', () => {
  let fixture;
  let component;
  let playerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestsModule,
        TranslateModule.forRoot(),
        PlayersModule
      ],
      providers: [
        {provide: APP_CONFIG, useValue: AppConfig},
        {provide: APP_BASE_HREF, useValue: '/'},
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                id: '1'
              })
            }
          }
        },
        PlayerService
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerDetailPage);
    fixture.detectChanges();
    component = fixture.debugElement.componentInstance;
    playerService = TestBed.get(PlayerService);
  }));

  it('should create player detail component', (() => {
    expect(component).toBeTruthy();
  }));

  it('should like a player', async(() => {
    localStorage.setItem('votes', String(AppConfig.votesLimit - 1));
    component.like({id: 1}).then((result) => {
      expect(result).toBe(true);
    });
  }));
});
