import { createSlice } from "@reduxjs/toolkit";
import { addTodo } from "../todo/todoSlice";

const counterSlice = createSlice({
  name: "Counter",
  initialState: 0,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addTodo, (state) => {
      let newState = state + 1;
      return newState;
    });
  },
});

export default counterSlice.reducer;
