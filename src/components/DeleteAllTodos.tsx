import { useAppDispatch } from "../hook";
import { deleteAllTodos } from "../features/todos/todosSlice";

export default function DeleteAllTodos() {
  const dispatch = useAppDispatch();

  function handleDeleteAllTodos(): void {
    dispatch(deleteAllTodos());
  }
  return (
    <button
      onClick={handleDeleteAllTodos}
      className="mt-12 font-bold bg-red-500 text-white p-4 rounded-lg hover:bg-red-700">
      DELETE ALL
    </button>
  );
}
