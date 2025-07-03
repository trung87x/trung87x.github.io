import React from "react";

function Form(props) {
  const [name, setName] = React.useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleAdd = (event) => {
    event.preventDefault();
    if (name.trim() === "") {
      return;
    }
    const newTodo = {
      id: `todo-${Date.now()}`,
      name: name.trim(),
      completed: false,
    };
    props.onAdd(newTodo);
    setName("");
  };
  // This component is a form for adding new todos.
  return (
    <form className="mb-4">
      <div className="mb-3">
        <label htmlFor="new-todo-input" className="form-label">
          What needs to be done?
        </label>
        <input
          type="text"
          id="new-todo-input"
          className="form-control"
          placeholder="Enter a task"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary w-100"
        onClick={handleAdd}
      >
        Add
      </button>
    </form>
  );
}
export default Form;
