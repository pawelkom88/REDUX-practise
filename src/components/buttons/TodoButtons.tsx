import DeleteAllTodos from "./DeleteAllTodos";
import MarkAsCompleted from "./MarkAsCompleted";

export default function TodoButtons() {
  return (
    <div className="flex justify-center items-center gap-8 flex-wrap">
      <DeleteAllTodos />
      <MarkAsCompleted />
    </div>
  );
}
