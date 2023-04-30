import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  extraReducers: () => {},
  initialState: { count: 0 },
  name: 'counter',
  reducers: {
    decrement: (state) => {
      state.count -= 1;
    },
    increment: (state) => {
      state.count += 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

const { decrement, increment, incrementByAmount } = counterSlice.actions;

export { counterSlice, decrement, increment, incrementByAmount };
