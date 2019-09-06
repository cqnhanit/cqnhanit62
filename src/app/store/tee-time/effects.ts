import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of as observableOf} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

import * as ActionsTeeTime from './actions';
import {TeeTimeService} from '../../services/tee-time.service';


@Injectable()
export class TeeTimeEffects {
  constructor(private actions$: Actions, private teeTimeService: TeeTimeService) {
  }

  @Effect()
  GetTeeTimeEffect$: Observable<any> = this.actions$.pipe(
    ofType<ActionsTeeTime.GetTeeTime>(
      ActionsTeeTime.actions.GET_TEE_TIME
    ),
    switchMap(action =>
      this.teeTimeService
        .getTeeTime()
        .pipe(
          map(
            tee_time => new ActionsTeeTime.GetTeeTimeSuccess(tee_time.data.rows)
          ),
          catchError(error =>
            observableOf(console.log(error, 'error'))
          )
        )
    )
  );
}
