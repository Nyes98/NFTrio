import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MsgState {
  msg: string;
}

const initialState: MsgState = {
  msg: "",
};

export const msgSlice = createSlice({
  name: "mordalErrorMsg",
  initialState,

  reducers: {
    ErrorMsg: (state, action: PayloadAction<string>) => {
      state.msg = action.payload;
    },
  },
});

export const { ErrorMsg } = msgSlice.actions;
export default msgSlice.reducer;
