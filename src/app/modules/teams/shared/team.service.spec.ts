import {async, TestBed} from '@angular/core/testing';
import {TeamService} from './team.service';
import {APP_BASE_HREF} from '@angular/common';
import {APP_CONFIG, AppConfig} from '../../../config/app.config';
import {TestsModule} from '../../../shared/modules/tests.module';
import {TranslateModule} from '@ngx-translate/core';
import {HttpErrorResponse} from '@angular/common/http';

describe('TeamService', () => {
  let teamService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TestsModule,
        TranslateModule.forRoot()
      ],
      providers: [
        {provide: APP_CONFIG, useValue: AppConfig},
        {provide: APP_BASE_HREF, useValue: '/'},
        TeamService
      ]
    });

    teamService = TestBed.get(TeamService);
  });

  it('should contains teams', async(() => {
    teamService.getTeams().subscribe((data: any) => {
      expect(data.length).toBeGreaterThan(AppConfig.topTeamsLimit);
    });
  }));

  it('should get team by id 1', async(() => {
    teamService.getTeamById('1').subscribe((team) => {
      expect(team.id).toEqual(1);
    });
  }));

  it('should fail getting team by no id', async(() => {
    teamService.getTeamById('noId').subscribe(() => {
    }, (error) => {
      expect(error).toEqual(jasmine.any(HttpErrorResponse));
    });
  }));

  it('should fail creating empty team', async(() => {
    teamService.createTeam({}).subscribe(() => {
    }, (error) => {
      expect(error).toEqual(jasmine.any(HttpErrorResponse));
    });
  }));

  it('should fail deleting noId team', async(() => {
    teamService.deleteTeamById('noId').subscribe(() => {
    }, (error) => {
      expect(error).toEqual(jasmine.any(HttpErrorResponse));
    });
  }));

  it('should fail like empty team', async(() => {
    localStorage.setItem('votes', String(0));
    teamService.like('noId').subscribe(() => {
    }, (error) => {
      expect(error).toEqual(jasmine.any(HttpErrorResponse));
    });
  }));

  it('should create team', async(() => {
    teamService.createTeam({
      'name': 'test',
      'alterEgo': 'test'
    }).subscribe((team) => {
      expect(team.id).not.toBeNull();
      teamService.deleteTeamById(team.id).subscribe((response) => {
        expect(response).toEqual({});
      });
    });
  }));

  it('should not like a team because no votes', async(() => {
    localStorage.setItem('votes', String(AppConfig.votesLimit));
    expect(TeamService.checkIfUserCanVote()).toBe(false);
    teamService.createTeam({
      'name': 'test',
      'alterEgo': 'test'
    }).subscribe((team) => {
      teamService.like(team).subscribe(() => {
      }, (error) => {
        expect(error).toBe('maximum votes');
        teamService.deleteTeamById(team.id).subscribe((response) => {
          expect(response).toEqual({});
        });
      });
    });
  }));

  it('should like a team', async(() => {
    localStorage.setItem('votes', String(0));
    expect(TeamService.checkIfUserCanVote()).toBe(true);
    teamService.createTeam({
      'name': 'test',
      'alterEgo': 'test'
    }).subscribe((team) => {
      teamService.like(team).subscribe((response) => {
        expect(response).toEqual({});
        teamService.deleteTeamById(team.id).subscribe((res) => {
          expect(res).toEqual({});
        });
      });
    });
  }));

  it('should delete a team', async(() => {
    teamService.createTeam({
      'name': 'test',
      'alterEgo': 'test'
    }).subscribe((team) => {
      teamService.deleteTeamById(team.id).subscribe((response) => {
        expect(response).toEqual({});
      });
    });
  }));
});
