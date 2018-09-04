import {async, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {TeamsModule} from '../../teams.module';
import {TestsModule} from '../../../../shared/modules/tests.module';
import {TranslateModule} from '@ngx-translate/core';
import {TeamService} from '../../shared/team.service';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {APP_CONFIG, AppConfig} from '../../../../config/app.config';
import {TeamDetailPage} from './team-detail.page';

describe('TeamDetailPage', () => {
  let fixture;
  let component;
  let teamService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestsModule,
        TranslateModule.forRoot(),
        TeamsModule
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
        TeamService
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamDetailPage);
    fixture.detectChanges();
    component = fixture.debugElement.componentInstance;
    teamService = TestBed.get(TeamService);
  }));

  it('should create team detail component', (() => {
    expect(component).toBeTruthy();
  }));

  it('should like a team', async(() => {
    localStorage.setItem('votes', String(AppConfig.votesLimit - 1));
    component.like({id: 1}).then((result) => {
      expect(result).toBe(true);
    });
  }));
});
