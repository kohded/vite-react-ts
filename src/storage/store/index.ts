import { Action, configureStore } from '@reduxjs/toolkit';
import {
  combineEpics,
  createEpicMiddleware,
  EpicMiddleware,
  StateObservable,
} from 'redux-observable';
import { catchError, Observable } from 'rxjs';
import { counterEpic } from './counter/epic';
import { counterSlice } from './counter/slice';

// https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html#adding-global-error-handler
const rootEpic = (
  action$: Observable<Action>,
  store$: StateObservable<void>,
  dependencies: unknown
) =>
  combineEpics(counterEpic)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      // eslint-disable-next-line no-console
      console.error(error);
      return source;
    })
  );
const epicMiddleware: EpicMiddleware<Action> = createEpicMiddleware();

export const store = configureStore({
  devTools: !import.meta.env.PROD ? { trace: true } : false,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), epicMiddleware],
  reducer: { counter: counterSlice.reducer },
});

// Must run after store middleware setup.
epicMiddleware.run(rootEpic);
