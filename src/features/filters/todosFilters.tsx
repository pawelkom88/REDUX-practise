import { createSlice } from "@reduxjs/toolkit";
import { filtersStatus } from "./types";

export const filterTodoBy: filtersStatus = {
  all: "all",
  active: "active",
  completed: "completed",
};

const filtersSlice = createSlice({
  name: "todos",
  initialState: {
    status: filterTodoBy.all,
  },
  reducers: {
    statusFilterChanged: (state, { payload }) => {
      state.status = payload;
    },
  },
});

export const { statusFilterChanged } = filtersSlice.actions;

export default filtersSlice.reducer;
