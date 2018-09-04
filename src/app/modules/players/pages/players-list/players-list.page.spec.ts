import {async, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {PlayersModule} from '../../players.module';
import {TestsModule} from '../../../../shared/modules/tests.module';
import {TranslateModule} from '@ngx-translate/core';
import {APP_CONFIG, AppConfig} from '../../../../config/app.config';
import {PlayersListPage} from './players-list.page';
import {PlayerService} from '../../shared/player.service';

describe('PlayerListComponent', () => {
  let fixture;
  let component;

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
        PlayerService
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersListPage);
    fixture.detectChanges();
    component = fixture.debugElement.componentInstance;
  }));

  it('should create player list component', (() => {
    expect(component).toBeTruthy();
  }));
});
