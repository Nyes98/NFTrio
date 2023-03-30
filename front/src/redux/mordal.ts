import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MsgState {
  nftBuyMordal: boolean;
  loadingMordal: boolean;
  mintResultMordal: boolean;
}

const initialState: MsgState = {
  nftBuyMordal: false,
  loadingMordal: false,
  mintResultMordal: false,
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
    mintResultMordalOpen: (state) => {
      state.mintResultMordal = !state.mintResultMordal;
    },
  },
});

export const { nftBuyMordalOpen, loadingMordalOpen, mintResultMordalOpen } =
  msgSlice.actions;
export default msgSlice.reducer;
