import { rootReducer } from "./root-reducers";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { useSelector } from "react-redux";
export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDipsatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
