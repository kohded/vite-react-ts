import { useCounter } from '../../storage/database/counter';
import { useCounter as useCounterRedux } from '../../storage/store/counter';

export const Counter = (): JSX.Element => {
  const { count, handleDecrementClick, handleIncrementClick } = useCounter();
  const { counter: c, handleDecrementClick: hDC, handleIncrementClick: hIC } = useCounterRedux();

  return (
    <>
      <p>Dexie Count (Persistent): {count}</p>
      <p>Redux Count: {c.count}</p>
      <button
        onClick={() => {
          handleDecrementClick();
          hDC();
        }}
        type="button"
      >
        -
      </button>
      <button
        onClick={() => {
          handleIncrementClick();
          hIC();
        }}
        type="button"
      >
        +
      </button>
    </>
  );
};
