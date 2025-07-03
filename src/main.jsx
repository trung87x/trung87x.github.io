import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import TodoApp from "./features/todo/TodoApp.jsx";

const TODO = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoApp todos={TODO} />
  </StrictMode>
);
