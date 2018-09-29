import {async, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TestsModule} from '../../../shared/modules/tests.module';
import {APP_CONFIG, AppConfig} from '../../../config/app.config';
import {PlayerService} from '../../../modules/players/shared/player.service';
import {HomePage} from './home.page';

describe('HomePage', () => {
  let fixture;
  let component;
  let playerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestsModule,
        TranslateModule.forRoot(),
      ],
      declarations: [
        HomePage
      ],
      providers: [
        {provide: APP_CONFIG, useValue: AppConfig},
        {provide: APP_BASE_HREF, useValue: '/'},
        PlayerService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    fixture.detectChanges();
    component = fixture.debugElement.componentInstance;
    playerService = TestBed.get(PlayerService);
  }));

  it('should create player top component', (() => {
    expect(component).toBeTruthy();
  }));

  it('should initialice component', fakeAsync(() => {
    fixture.detectChanges();
    spyOn(playerService, 'getPlayers').and.returnValue(Promise.resolve(true));
    tick();
    fixture.detectChanges();
    expect(component.players.length).toBe(AppConfig.topPlayersLimit);
  }));

  it('should like a player', async(() => {
    localStorage.setItem('votes', String(AppConfig.votesLimit - 1));
    component.like({id: 1}).then((result) => {
      expect(result).toBe(true);
    });
  }));

  it('should not like a player', async(() => {
    localStorage.setItem('votes', String(AppConfig.votesLimit));
    component.like({id: 1}).then(() => {
    }, (error) => {
      expect(error).toBe('maximum votes');
    });
    expect(PlayerService.checkIfUserCanVote()).toBe(false);
  }));
});
