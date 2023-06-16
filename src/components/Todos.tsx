import React, { useState } from "react";
import { useAppDispatch } from "../hook";
import { nanoid } from "nanoid";
import { addTodo } from "../features/todos/todosSlice";
import Todo from "./Todo";

export default function Todos() {
  const [todo, setTodo] = useState("");
  const dispatch = useAppDispatch();

  function handleAddTodo(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(addTodo({ id: nanoid(), name: todo, completed: false }));
    setTodo("");
  }

  return (
    <form onSubmit={handleAddTodo} className="w-1/2 mx-auto">
      <input
        onChange={e => setTodo(e.target.value)}
        value={todo}
        type="text"
        className=" p-4 border-2 border-gray-700"
        placeholder="Add Todo"
      />
      <button
        className="m-4 border-2 border-gray-700 p-4 bg-green-400 hover:bg-green-800 hover:text-white"
        type="submit">
        Add todo
      </button>
      <div className="my-12">
        <h2 className="text-lg font-bold text-gray-700">Filters</h2>
        {/* // component different colors */}
        <div className="flex items-center justify-start gap-4">
          <label htmlFor="completed">Completed</label>
          <input
            id="completed"
            className="w-8 h-8 m-2"
            type="checkbox"
            checked={false}
            onChange={() => console.log("")}
          />
        </div>
      </div>
      <ol className="border-2 p-4 border-gray-700">
        <Todo />
      </ol>
    </form>
  );
}
