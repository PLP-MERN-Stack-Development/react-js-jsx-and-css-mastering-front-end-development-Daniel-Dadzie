export const fetchTodos = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=20");
    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};
