import { createSlice } from "@reduxjs/toolkit";
import { TodoState } from "./types";

const initialState: TodoState = {
  entities: [{ id: 1, name: "LearnRedux", completed: false }],
  status: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.entities.push(action.payload);
    },
    markAsCompleted: ({ entities = [] }, { payload }) => {
      const todo = entities.find(todo => todo.id === payload);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    markAllAsCompleted: state => {
      state.entities.forEach(todo => {
        todo.completed = true;
      });
    },
    unmarkAllAsCompleted: state => {
      state.entities.forEach(todo => {
        todo.completed = false;
      });
    },
    deleteTodo: (state, { payload }) => {
      state.entities = state.entities.filter(todo => todo.id !== payload);
    },
    deleteAllTodos: state => {
      state.entities = [];
    },
  },
});

export const {
  addTodo,
  markAsCompleted,
  deleteTodo,
  deleteAllTodos,
  markAllAsCompleted,
  clearCompleted,
  unmarkAllAsCompleted,
} = todosSlice.actions;

export default todosSlice.reducer;
