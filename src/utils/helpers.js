// helpers.js

// 1. Capitalize the first letter of a string
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// 2. Format date to a readable string
export const formatDate = (date) => new Date(date).toLocaleDateString();

// 3. Toggle dark mode class on root element
export const toggleDarkMode = (isDark) => {
  const root = document.documentElement;
  if (isDark) root.classList.add("dark");
  else root.classList.remove("dark");
};

// 4. Filter tasks based on completion
export const filterTasks = (tasks, status) => {
  if (status === "completed") return tasks.filter((task) => task.completed);
  if (status === "pending") return tasks.filter((task) => !task.completed);
  return tasks; // all
};

// 5. Search an array of objects by a key and query
export const searchArray = (arr, key, query) =>
  arr.filter((item) =>
    item[key].toLowerCase().includes(query.toLowerCase())
  );

// 6. Toggle an item in an array (like tags)
export const toggleItemInArray = (arr, item) =>
  arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item];

// 7. Generate a unique ID (simple)
export const generateId = () => '_' + Math.random().toString(36).substr(2, 9);
