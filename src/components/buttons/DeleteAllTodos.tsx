import { useAppDispatch, useAppSelector } from "../../hook";
import { deleteAllTodos } from "../../features/todos/todosSlice";
import { addStylesConditionally } from "../../helpers/helpers";

export default function DeleteAllTodos() {
  const dispatch = useAppDispatch();
  const todosCount = useAppSelector(state => state.todos.entities.length);

  function handleDeleteAllTodos(): void {
    dispatch(deleteAllTodos());
  }

  return (
    <button
      onClick={handleDeleteAllTodos}
      disabled={!todosCount}
      className={`font-bold text-white p-4 rounded-lg bg-red-500 hover:bg-red-700 ${addStylesConditionally(
        !todosCount,
        "!bg-gray-500 hover:bg-gray-500 cursor-not-allowed"
      )}`}>
      DELETE ALL
    </button>
  );
}
