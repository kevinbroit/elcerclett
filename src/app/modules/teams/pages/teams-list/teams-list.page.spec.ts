import {async, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {TeamsModule} from '../../Teams.module';
import {TestsModule} from '../../../../shared/modules/tests.module';
import {TranslateModule} from '@ngx-translate/core';
import {APP_CONFIG, AppConfig} from '../../../../config/app.config';
import {TeamsListPage} from './teams-list.page';
import {TeamService} from '../../shared/team.service';

describe('TeamListComponent', () => {
  let fixture;
  let component;

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
        TeamService
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamsListPage);
    fixture.detectChanges();
    component = fixture.debugElement.componentInstance;
  }));

  it('should create Team list component', (() => {
    expect(component).toBeTruthy();
  }));
});
