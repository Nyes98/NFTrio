import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WidthState {
  width: number;
  height: number;
}

const initialState: WidthState = {
  width: 0,
  height: 0,
};

export const addressSlice = createSlice({
  name: "width",
  initialState,

  reducers: {
    setWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload;
    },
    setHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
  },
});

export const { setWidth, setHeight } = addressSlice.actions;
export default addressSlice.reducer;
