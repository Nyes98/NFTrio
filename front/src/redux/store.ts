import { configureStore } from "@reduxjs/toolkit";
import moveReducer from "./move";
import mordalReducer from "./mordal";
import metaAddressReducer from "./metaAddress";
import actionReducer from "./Action";

export const store = configureStore({
  reducer: {
    move: moveReducer,
    nftBuyMordalOpen: mordalReducer,
    metaAddress: metaAddressReducer,
    loadingMordalOpen: mordalReducer,
    action: actionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
