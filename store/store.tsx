import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../src/features/todos/todosSlice";
import filtersReducer from "../src/features/filters/todosFilters";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
