import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { uIReducer, userDataReducer } from "./reducers";
// import { createLogger } from "redux-logger";

import todoReducer from "./slice/todo/todoSlice";
import counterReducer from "./slice/counter/counterSlice";

// const logger = createLogger();

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    UI: uIReducer,
    userData: userDataReducer,
    counter: counterReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
