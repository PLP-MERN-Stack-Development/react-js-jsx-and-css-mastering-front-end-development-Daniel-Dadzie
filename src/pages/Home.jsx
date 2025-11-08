import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import TaskManager from "../components/TaskManager";
import { fetchTodos } from "../api/api";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 5;

  const handleFetchTodos = async () => {
    setLoading(true);
    setError("");
    const data = await fetchTodos();
    if (data.length === 0) setError("Failed to fetch data");
    else setTodos(data);
    setLoading(false);
  };

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
  const totalPages = Math.ceil(todos.length / todosPerPage);

  return (
    <div className="space-y-8">
      <TaskManager />

      <Card>
        <h2 className="text-2xl font-semibold mb-2">API Example</h2>
        <p className="text-gray-600 mb-4">
          Fetch data from JSONPlaceholder and display it below.
        </p>
        <Button onClick={handleFetchTodos} disabled={loading}>
          {loading ? "Loading..." : "Fetch Todos"}
        </Button>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <ul className="mt-4 space-y-2">
          {currentTodos.map((todo) => (
            <li
              key={todo.id}
              className={`p-2 border rounded transition-transform duration-300 hover:scale-105 ${
                todo.completed ? "line-through text-gray-500" : "bg-gray-50 dark:bg-gray-700"
              }`}
            >
              {todo.title}
            </li>
          ))}
        </ul>

        {todos.length > todosPerPage && (
          <div className="mt-4 flex justify-center space-x-2">
            <Button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
              Prev
            </Button>
            <span className="px-2">{currentPage}</span>
            <Button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
              Next
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Home;
