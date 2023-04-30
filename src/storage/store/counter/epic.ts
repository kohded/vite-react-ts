import { Action } from '@reduxjs/toolkit';
import { ofType } from 'redux-observable';
import { ignoreElements, Observable, tap } from 'rxjs';
import { decrement, increment } from './slice';

export const counterEpic = (actions$: Observable<Action>): Observable<Action> =>
  actions$.pipe(
    ofType(decrement.type, increment.type),
    // eslint-disable-next-line no-console
    tap((action) => console.log(`Epic: ${action.type}`)),
    ignoreElements()
  );
