import TodoButtons from "./components/buttons/TodoButtons";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <h1 className="text-center text-4xl font-bold text-gray-700 mt-24">TODOS</h1>
      <Todos />
      <div className="mt-12 flex justify-between items-center gap-8">
        <TodoButtons />
      </div>
    </div>
  );
}

export default App;
