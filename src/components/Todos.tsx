import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import { nanoid } from "nanoid";
import { addTodo } from "../features/todos/todosSlice";
import Todo from "./Todo";
import Filters from "./Filters";

export default function Todos() {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useAppDispatch();
  const numberOfTodos = useAppSelector(state => state.todos.entities.length);

  function handleAddTodo(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (!todo.length) return;

    dispatch(addTodo({ id: nanoid(), name: todo, completed: false }));
    setTodo("");
  }

  const suffix: string = numberOfTodos === 1 ? "Todo" : "Todos";
  const todosCount: number | string =
    numberOfTodos > 0 ? `${numberOfTodos} ${suffix}` : "No todos 😣";

  return (
    <div className="w-full p-4">
      <form onSubmit={handleAddTodo} className="lg:w-1/2 mx-auto">
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
        <Filters />
      </form>

      <ol className="lg:w-1/2 border-2 p-4 border-gray-700 mx-auto">
        <h3 className="text-2xl mb-2">{todosCount}</h3>
        <Todo />
      </ol>
    </div>
  );
}
