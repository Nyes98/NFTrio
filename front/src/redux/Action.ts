import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IActionState {
  index: number;
  name: string;
  from: number;
  to: number;
}

const initialState: Array<IActionState> = [];

export const msgSlice = createSlice({
  name: "action",
  initialState,

  reducers: {
    enqueue: (state, action: PayloadAction<IActionState>) => {
      return [...state, action.payload];
    },
    dequeue: (state, action) => {
      return [...state].slice(1);
    },
  },
});

export const { enqueue, dequeue } = msgSlice.actions;
export default msgSlice.reducer;
