import "./TodoApp.css";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import React from "react";

function usePrevious(value) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

function useFoucusOnTodoDelete(currentLength) {
  const headingRef = React.useRef(null);
  const prevLength = usePrevious(currentLength);
  React.useEffect(() => {
    if (currentLength < prevLength) {
      // If the current length is less than the previous length, focus on the heading
      headingRef.current?.focus();
    } else if (currentLength === prevLength) {
      // If the lengths are equal, blur the heading
      headingRef.current?.blur();
    }
  }, [currentLength, prevLength]);
  return headingRef;
}

function App(props) {
  const [todos, setTodos] = React.useState(props.todos || []);
  const [filter, setFilter] = React.useState("All");

  const filterNames = ["All", "Active", "Completed"];
  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true; // Default case, should not happen
  });

  const headingRef = useFoucusOnTodoDelete(filteredTodos.length);

  const onAdd = (newTodo) => {
    // Logic to add a new todo
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    console.log("Adding new todo:", newTodo);
  };
  const onCheck = (id, completed) => {
    // Logic to handle checkbox change
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
    console.log(`Todo ${id} completed:`, completed);
  };
  const onDelete = (id) => {
    // Logic to handle delete action
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    console.log(`Deleting todo: ${id}`);
  };
  const onSave = (id, newName) => {
    // Logic to save the edited todo
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, name: newName } : todo
      )
    );
    console.log(`Saving todo: ${id} with name: ${newName}`);
  };
  const onFilter = (filterName) => {
    // Logic to handle filter button click
    console.log(`Filtering by: ${filterName}`);
    // This could be implemented to filter the todos based on the filterName
    setFilter(filterName);
  };

  return (
    <div className="container mt-5 w-50">
      <h1 className="text-center mb-4">TodoMatic</h1>

      <Form onAdd={onAdd} />

      <div
        className="btn-group d-flex justify-content-center mb-4"
        role="group"
      >
        {filterNames.map((name) => (
          <FilterButton
            key={name}
            name={name}
            active={name === filter}
            onFilter={onFilter}
          />
        ))}
      </div>

      <h2 className="mb-3" ref={headingRef} tabIndex="-1">
        3 tasks remaining
      </h2>

      <ul className="list-group">
        {filteredTodos &&
          filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onCheck={onCheck}
              onDelete={onDelete}
              onSave={onSave}
            />
          ))}
      </ul>
    </div>
  );
}

export default App;
