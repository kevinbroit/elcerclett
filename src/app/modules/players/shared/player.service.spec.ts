import {async, TestBed} from '@angular/core/testing';
import {PlayerService} from './player.service';
import {APP_BASE_HREF} from '@angular/common';
import {APP_CONFIG, AppConfig} from '../../../config/app.config';
import {TestsModule} from '../../../shared/modules/tests.module';
import {TranslateModule} from '@ngx-translate/core';
import {HttpErrorResponse} from '@angular/common/http';

describe('PlayerService', () => {
  let playerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TestsModule,
        TranslateModule.forRoot()
      ],
      providers: [
        {provide: APP_CONFIG, useValue: AppConfig},
        {provide: APP_BASE_HREF, useValue: '/'},
        PlayerService
      ]
    });

    playerService = TestBed.get(PlayerService);
  });

  it('should contains players', async(() => {
    playerService.getPlayers().subscribe((data: any) => {
      expect(data.length).toBeGreaterThan(AppConfig.topPlayersLimit);
    });
  }));

  it('should get player by id 1', async(() => {
    playerService.getPlayerById('1').subscribe((player) => {
      expect(player.id).toEqual(1);
    });
  }));

  it('should fail getting player by no id', async(() => {
    playerService.getPlayerById('noId').subscribe(() => {
    }, (error) => {
      expect(error).toEqual(jasmine.any(HttpErrorResponse));
    });
  }));

  it('should fail creating empty player', async(() => {
    playerService.createPlayer({}).subscribe(() => {
    }, (error) => {
      expect(error).toEqual(jasmine.any(HttpErrorResponse));
    });
  }));

  it('should fail deleting noId player', async(() => {
    playerService.deletePlayerById('noId').subscribe(() => {
    }, (error) => {
      expect(error).toEqual(jasmine.any(HttpErrorResponse));
    });
  }));

  it('should fail like empty player', async(() => {
    localStorage.setItem('votes', String(0));
    playerService.like('noId').subscribe(() => {
    }, (error) => {
      expect(error).toEqual(jasmine.any(HttpErrorResponse));
    });
  }));

  it('should create player', async(() => {
    playerService.createPlayer({
      'name': 'test',
      'alterEgo': 'test'
    }).subscribe((player) => {
      expect(player.id).not.toBeNull();
      playerService.deletePlayerById(player.id).subscribe((response) => {
        expect(response).toEqual({});
      });
    });
  }));

  it('should not like a player because no votes', async(() => {
    localStorage.setItem('votes', String(AppConfig.votesLimit));
    expect(PlayerService.checkIfUserCanVote()).toBe(false);
    playerService.createPlayer({
      'name': 'test',
      'alterEgo': 'test'
    }).subscribe((player) => {
      playerService.like(player).subscribe(() => {
      }, (error) => {
        expect(error).toBe('maximum votes');
        playerService.deletePlayerById(player.id).subscribe((response) => {
          expect(response).toEqual({});
        });
      });
    });
  }));

  it('should like a player', async(() => {
    localStorage.setItem('votes', String(0));
    expect(PlayerService.checkIfUserCanVote()).toBe(true);
    playerService.createPlayer({
      'name': 'test',
      'alterEgo': 'test'
    }).subscribe((player) => {
      playerService.like(player).subscribe((response) => {
        expect(response).toEqual({});
        playerService.deletePlayerById(player.id).subscribe((res) => {
          expect(res).toEqual({});
        });
      });
    });
  }));

  it('should delete a player', async(() => {
    playerService.createPlayer({
      'name': 'test',
      'alterEgo': 'test'
    }).subscribe((player) => {
      playerService.deletePlayerById(player.id).subscribe((response) => {
        expect(response).toEqual({});
      });
    });
  }));
});
