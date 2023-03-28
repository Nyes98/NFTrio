import { configureStore } from "@reduxjs/toolkit";
import moveReducer from "./move";
import mordalReducer from "./mordal";
import metaAddressReducer from "./metaAddress";

export const store = configureStore({
  reducer: {
    move: moveReducer,
    nftBuyMordalOpen: mordalReducer,
    metaAddress: metaAddressReducer,
    loadingMordalOpen: mordalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
