import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import TaskManager from "./components/TaskManager";
import APIComponent from "./components/APIComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
        <Navbar />
        <TaskManager />
        <APIComponent />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
