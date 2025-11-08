React Tailwind Task Manager

A modern Task Manager application built with React, Tailwind CSS, and Vite.
Features include:

Dark/Light mode toggle

Task management (add, delete, mark complete, undo)

Tagging system

API integration with a searchable and paginated todo list

Responsive layout with smooth hover and transition animations

Modular and reusable components

Utilities for tasks and search in helpers.js

Table of Contents

Demo

Features

Folder Structure

Getting Started

Available Scripts

Technologies Used

Deployment Link
react-js-jsx-and-css-mastering-front-end-development-68vmf14xe.vercel.app

License

Demo

Provide a screenshot or link to your deployed app here:

http://localhost:5173

Features

Task Management: Add new tasks, mark tasks as completed, undo completion, delete tasks.

Tags: Assign tags to tasks and visually filter them.

Dark Mode: Toggle between light and dark theme using context.

API Todos: Fetch todos from jsonplaceholder.typicode.com, with search and pagination.

Animations: Smooth hover effects and transitions using Tailwind CSS.

Reusable Helpers: Utility functions for tasks, dark mode, and search.

Folder Structure
react-tailwind/
├─ public/
│  └─ index.html
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ TaskManager.jsx
│  │  ├─ APIComponent.jsx
│  │  └─ Card.jsx
│  ├─ context/
│  │  └─ ThemeContext.jsx
│  ├─ helpers/
│  │  └─ helpers.js
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
└─ README.md

Getting Started
Prerequisites

Node.js (v18+ recommended)

npm (v9+ recommended)

Installation

Clone the repository:

git clone https://github.com/your-username/react-tailwind-task-manager.git
cd react-tailwind-task-manager


Install dependencies:

npm install


Start the development server:

npm run dev


Open your browser at http://localhost:5173

Available Scripts

npm run dev — Starts the Vite development server

npm run build — Builds the app for production

npm run preview — Preview production build locally

Technologies Used

React — Frontend library for building UI components

Tailwind CSS — Utility-first CSS framework for styling

Vite — Fast development build tool

PostCSS — For processing Tailwind directives

jsonplaceholder API — Sample API for fetching todos

Deployment

You can deploy your app to Vercel, Netlify, or GitHub Pages.

Deploy to Vercel

Install Vercel CLI globally (optional):

npm install -g vercel


Run the deploy command:

vercel


Follow prompts and your app will be deployed with a live URL.

Deploy to Netlify

Build the app for production:

npm run build


Drag and drop the dist/ folder in Netlify Drop

OR
Use Netlify CLI:

npm install -g netlify-cli
netlify deploy


Follow instructions to get the live URL.

Deploy to GitHub Pages

Install gh-pages:

npm install --save-dev gh-pages


Add the following scripts to package.json:

"predeploy": "npm run build",
"deploy": "gh-pages -d dist"


Deploy:

npm run deploy

License

This project is licensed under the MIT License.