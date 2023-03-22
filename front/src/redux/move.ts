import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AddressState {
  value: string;
}

const initialState: AddressState = {
  value: "",
};

export const addressSlice = createSlice({
  name: "address",
  initialState,

  reducers: {
    move: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { move } = addressSlice.actions;
export default addressSlice.reducer;
