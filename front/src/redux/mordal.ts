import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MsgState {
  nftBuyMordal: boolean;
  loadingMordal: boolean;
}

const initialState: MsgState = {
  nftBuyMordal: false,
  loadingMordal: false,
};

export const msgSlice = createSlice({
  name: "mordal",
  initialState,

  reducers: {
    nftBuyMordalOpen: (state) => {
      state.nftBuyMordal = !state.nftBuyMordal;
    },
    loadingMordalOpen: (state) => {
      state.loadingMordal = !state.loadingMordal;
    },
  },
});

export const { nftBuyMordalOpen, loadingMordalOpen } = msgSlice.actions;
export default msgSlice.reducer;
