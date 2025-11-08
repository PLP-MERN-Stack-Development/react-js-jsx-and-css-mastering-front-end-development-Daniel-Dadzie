import React, { useState, useEffect } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div id="tasks" className="p-4">
      <h2 className="text-xl font-bold mb-4 dark:text-gray-100">Task Manager</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
          className="p-2 border rounded flex-1 dark:bg-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`p-2 rounded flex justify-between items-center transition-colors duration-300 ${
              task.completed
                ? "bg-green-200 dark:bg-green-700 line-through text-gray-500 dark:text-gray-300"
                : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            }`}
          >
            <span>{task.text}</span>
            <div className="flex gap-2">
              <button
                onClick={() => toggleComplete(task.id)}
                className="px-2 py-1 bg-yellow-300 dark:bg-yellow-600 rounded hover:brightness-90 transition"
              >
                {task.completed ? "Undo" : "Done"}
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="px-2 py-1 bg-red-400 dark:bg-red-700 text-white rounded hover:brightness-90 transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
