import { Action, Dispatch, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { store } from '.';

type AppDispatch = typeof store.dispatch;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
type RootState = ReturnType<typeof store.getState>;

// Use instead of default useDispatch and useSelector.
const useAppDispatch = (): Dispatch => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector };
export type { AppDispatch, AppThunk, RootState };
