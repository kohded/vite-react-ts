import type { RootState } from '../helpers';
import { useAppDispatch, useAppSelector } from '../helpers';
import { decrement, increment } from './slice';

// Hook
export const useCounter = (): {
  counter: { count: number };
  handleDecrementClick: () => void;
  handleIncrementClick: () => void;
} => {
  const dispatch = useAppDispatch();

  return {
    counter: useAppSelector((state: RootState) => state.counter),
    handleDecrementClick: () => dispatch(decrement()),
    handleIncrementClick: () => dispatch(increment()),
  };
};
