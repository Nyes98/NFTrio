import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MsgState {
  nftBuyMordal: boolean;
}

const initialState: MsgState = {
  nftBuyMordal: false,
};

export const msgSlice = createSlice({
  name: "mordal",
  initialState,

  reducers: {
    nftBuyMordalOpen: (state) => {
      state.nftBuyMordal = !state.nftBuyMordal;
    },
  },
});

export const { nftBuyMordalOpen } = msgSlice.actions;
export default msgSlice.reducer;
