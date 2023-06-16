import { filterTodoBy } from "../features/filters/todosFilters";
import { useAppSelector } from "../hook";
import TodoItem from "./TodoItem";

export default function Todo() {
  const todos = useAppSelector(state => state.todos.entities);
  const todoStatus = useAppSelector(state => state.filters.status);

  const renderedTodos = todos.filter(todo => {
    switch (todoStatus) {
      case filterTodoBy.active:
        return !todo.completed;
      case filterTodoBy.completed:
        return todo.completed;
      default:
        return todo;
    }
  });

  return (
    <>
      {renderedTodos?.map(todo => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </>
  );
}
