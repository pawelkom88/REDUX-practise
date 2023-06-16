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
    markAsCompleted: ({ entities }, { payload }) => {
      const todo = entities.find(todo => todo.id === payload);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, { payload }) => {
      state.entities = state.entities.filter(todo => todo.id !== payload);
    },
    deleteAllTodos: state => {
      state.entities = [];
    },
  },
});

export const { addTodo, markAsCompleted, deleteTodo, deleteAllTodos } = todosSlice.actions;

export default todosSlice.reducer;
