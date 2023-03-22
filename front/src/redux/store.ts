import { configureStore } from "@reduxjs/toolkit";
import moveReducer from "./move";
import mordalReducer from "./mordal";

export const store = configureStore({
  reducer: {
    move: moveReducer,
    nftBuyMordalOpen: mordalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
