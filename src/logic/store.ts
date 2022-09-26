import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { uIReducer, userDataReducer } from "./reducers";

import todoReducer from "./slice/todo/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    UI: uIReducer,
    userData: userDataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
