import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoData {
  id: number;
  content: string;
  isCompleted: boolean;
}

interface Istate {
  todos: TodoData[];
}

const initialState: Istate = {
  todos: [],
};

/**
 * createSlice returns a object of {reducer,actions (action creators)}
 */

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoData>) => {
      state.todos.push(action.payload);
    },
    markTodoDone: (state, action: PayloadAction<number>) => {
      for (let todo of state.todos) {
        if (todo.id === action.payload) {
          todo.isCompleted = !todo.isCompleted;
        }
      }
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      let targetIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todos.splice(targetIndex, 1);
    },
  },
});

// (std.) named exports for actions creators for usage in the dispatch function.
export const { addTodo, deleteTodo, markTodoDone } = todoSlice.actions;

// (std.) export default for reducer
export default todoSlice.reducer;
