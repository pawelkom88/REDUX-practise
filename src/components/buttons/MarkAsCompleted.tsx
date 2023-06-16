import { useAppDispatch, useAppSelector } from "../../hook";
import { markAllAsCompleted, unmarkAllAsCompleted } from "../../features/todos/todosSlice";
import { addStylesConditionally } from "../../helpers/helpers";

export default function MarkAsCompleted() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(state => state.todos.entities);
  const todosCount: number = todos.length;
  const areAllCompleted: boolean = todos.every(todo => todo.completed);

  function handleMarkAsCompleted() {
    if (areAllCompleted) {
      dispatch(unmarkAllAsCompleted());
    } else {
      dispatch(markAllAsCompleted());
    }
  }

  return (
    <button
      disabled={!todosCount}
      onClick={handleMarkAsCompleted}
      className={`
      ${addStylesConditionally(!todosCount, "!bg-gray-500 hover:bg-gray-700 cursor-not-allowed")}
      font-bold bg-green-500 text-white p-4 rounded-lg hover:bg-green-700`}>
      {areAllCompleted ? "Unmark all completed" : "Mark all completed"}
    </button>
  );
}
