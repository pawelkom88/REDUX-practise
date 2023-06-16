import { useState } from "react";
import { statusFilterChanged, filterTodoBy } from "../features/filters/todosFilters";
import { useAppDispatch, useAppSelector } from "../hook";

export default function Filters() {
  const filterName = useAppSelector(state => state.filters.status);
  const todosCount = useAppSelector(state => state.todos.entities.length);
  const [filterType, setFilterType] = useState(filterName);

  const dispatch = useAppDispatch();

  function handleFiltersChange(type: string) {
    setFilterType(type);
    dispatch(statusFilterChanged(type));
  }

  return (
    <div className="my-12">
      <h2 className="text-lg font-bold text-gray-700">Filters</h2>

      {Object.keys(filterTodoBy).map(type => {
        return (
          <li key={type} className="w-36 flex items-center justify-between gap-4">
            <label htmlFor="completed">{type}</label>
            <input
              id="completed"
              disabled={!todosCount}
              className="w-8 h-8 m-2"
              type="checkbox"
              checked={type === filterType}
              onChange={() => handleFiltersChange(type)}
            />
          </li>
        );
      })}
    </div>
  );
}
