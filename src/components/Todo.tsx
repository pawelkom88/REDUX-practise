import { useAppDispatch, useAppSelector } from "../hook";
import { addStylesConditionally } from "../helpers/helpers";
import { deleteTodo, markAsCompleted } from "../features/todos/todosSlice";

export default function Todo() {
  const dispatch = useAppDispatch();

  const todos = useAppSelector(state => state.todos.entities);

  function handleMarkAsCompleted(id: number): void {
    dispatch(markAsCompleted(id));
  }

  function handleDeleteTodo(id: number): void {
    dispatch(deleteTodo(id));
  }

  const renderedListItems = todos?.map(todo => {
    return (
      <li className="my-2 border-2 border-gray-700" key={todo.id}>
        <div
          className={`${addStylesConditionally(
            todo.completed,
            "bg-green-400"
          )}  flex justify-between items-center `}>
          <p className={`text-xl p-2 ${addStylesConditionally(todo.completed, "line-through")}`}>
            {todo.name}
          </p>
          <span className="flex items-center gap-4 mr-4">
            <input
              className="w-8 h-8 m-2"
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleMarkAsCompleted(todo.id)}
            />
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="text-sm font-bold bg-red-500 text-white p-1 rounded-lg hover:bg-red-700">
              Delete
            </button>
          </span>
        </div>
      </li>
    );
  });

  return !renderedListItems.length ? "No todos" : renderedListItems;
}
