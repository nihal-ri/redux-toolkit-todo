import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { uIReducer, userDataReducer } from "./reducers";
// import { createLogger } from "redux-logger";

import todoReducer from "./slice/todo/todoSlice";
import counterReducer from "./slice/counter/counterSlice";
import { apiSlice } from "./rtk-query/apiSlice";

// const logger = createLogger();

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    UI: uIReducer,
    userData: userDataReducer,
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
