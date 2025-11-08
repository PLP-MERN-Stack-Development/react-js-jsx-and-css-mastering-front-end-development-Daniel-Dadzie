import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center transition-colors duration-500">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        React App
      </h1>

      <div className="flex items-center space-x-4">
        <a
          href="#home"
          className="text-gray-800 dark:text-gray-200 hover:underline"
        >
          Home
        </a>
        <a
          href="#tasks"
          className="text-gray-800 dark:text-gray-200 hover:underline"
        >
          Tasks
        </a>
        <a
          href="#api"
          className="text-gray-800 dark:text-gray-200 hover:underline"
        >
          API
        </a>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-500"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
