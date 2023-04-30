import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '..';
import type { Counter } from './counter';

export const useCounter = (): {
  count: number;
  handleDecrementClick: () => void;
  handleIncrementClick: () => void;
} => {
  const { count }: Counter = useLiveQuery(() => db.counter.get(1)) ?? { count: 0, id: 1 };

  return {
    count,
    handleDecrementClick: async () => {
      await db.counter.put({ count: count - 1, id: 1 });
    },
    handleIncrementClick: async () => {
      await db.counter.put({ count: count + 1, id: 1 });
    },
  };
};
