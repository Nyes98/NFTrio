import { configureStore } from "@reduxjs/toolkit";
import moveReducer from "./move";

export const store = configureStore({
  reducer: {
    move: moveReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
