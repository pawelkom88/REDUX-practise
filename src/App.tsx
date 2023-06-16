import DeleteAllTodos from "./components/DeleteAllTodos";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <h1 className="text-center text-4xl font-bold text-gray-700 mt-24">TODOS</h1>
      <Todos />
      <DeleteAllTodos />
    </div>
  );
}

export default App;
