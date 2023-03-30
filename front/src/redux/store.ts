import { configureStore } from "@reduxjs/toolkit";
import moveReducer from "./move";
import mordalReducer from "./mordal";
import metaAddressReducer from "./metaAddress";
import actionReducer from "./Action";
import widthReducer from "./width";

export const store = configureStore({
  reducer: {
    move: moveReducer,
    nftBuyMordalOpen: mordalReducer,
    metaAddress: metaAddressReducer,
    loadingMordalOpen: mordalReducer,
    action: actionReducer,
    mintResultMordalOpen: mordalReducer,
    setWidth: widthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
