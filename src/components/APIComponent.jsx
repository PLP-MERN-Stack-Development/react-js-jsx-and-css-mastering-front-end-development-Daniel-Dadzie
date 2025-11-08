import React, { useState, useEffect } from "react";

const APIComponent = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const perPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/todos`
        );
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // Filter todos based on search term
  const filteredData = data.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate paginated data
  const totalPages = Math.ceil(filteredData.length / perPage);
  const paginatedData = filteredData.slice(
    (page - 1) * perPage,
    page * perPage
  );

  // Adjust page if search reduces total pages
  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages || 1);
    }
  }, [searchTerm, totalPages, page]);

  return (
    <div id="api" className="p-4">
      <h2 className="text-xl font-bold mb-4 dark:text-gray-100">API Todos</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search todos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 w-full p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      {loading ? (
        <p className="dark:text-gray-100">Loading...</p>
      ) : (
        <ul className="space-y-2">
          {paginatedData.map((todo) => (
            <li
              key={todo.id}
              className="p-2 bg-gray-100 dark:bg-gray-800 rounded transition-colors duration-300"
            >
              {todo.title}
            </li>
          ))}
          {paginatedData.length === 0 && (
            <li className="dark:text-gray-100">No todos found</li>
          )}
        </ul>
      )}

      {/* Pagination */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:brightness-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="dark:text-gray-100">
          Page {page} of {totalPages || 1}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages || totalPages === 0}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:brightness-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default APIComponent;
