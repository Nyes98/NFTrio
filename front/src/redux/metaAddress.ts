import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MetaAddressState {
  address: string;
}

const initialState: MetaAddressState = {
  address: "",
};

export const metaAddressSlice = createSlice({
  name: "metaAddress",
  initialState,

  reducers: {
    setMetaAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
  },
});

export const { setMetaAddress } = metaAddressSlice.actions;
export default metaAddressSlice.reducer;
