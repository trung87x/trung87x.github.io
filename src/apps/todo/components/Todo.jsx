import React from "react";

function usePrevious(value) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

function useFoucusOnEditToggle(isEditing) {
  const inputRef = React.useRef(null);
  const prevIsEditing = usePrevious(isEditing);
  React.useEffect(() => {
    if (isEditing && !prevIsEditing) {
      inputRef.current?.focus();
    } else if (!isEditing && prevIsEditing) {
      inputRef.current?.blur(); // Remove focus when not editing
    } else if (isEditing && prevIsEditing) {
      inputRef.current?.select(); // Select text when toggling edit mode
    }
  }, [isEditing, prevIsEditing]);
  return inputRef;
}

function Todo(props) {
  const { todo } = props;
  const [isEditing, setIsEditing] = React.useState(false);
  const [newName, setNewName] = React.useState(todo.name);

  const inputRef = useFoucusOnEditToggle(isEditing);

  const handleCheck = (event) => {
    // Logic to handle checkbox change
    console.log(`Todo ${todo.id} completed:`, event.target.checked);
    props.onCheck(todo.id, event.target.checked);
  };
  const handleDelete = () => {
    // Logic to handle delete action
    console.log(`Deleting todo: ${todo.id}`);
    props.onDelete(todo.id);
  };
  const handleEdit = () => {
    // Logic to handle edit action
    console.log(`Editing todo: ${todo.id}`);
    // This could toggle the edit mode or open a modal for editing
    // props.onEdit(todo.id);
    setIsEditing(true);
  };
  const handleCancel = () => {
    // Logic to handle cancel action
    console.log(`Cancelling edit for todo: ${todo.id}`);
    setIsEditing(false);
  };
  const handleSave = (event) => {
    event.preventDefault();
    // Logic to save the edited todo
    console.log(`Saving todo: ${todo.id} with name: ${newName}`);
    props.onSave(todo.id, newName);
    setIsEditing(false);
  };
  const handleChange = (event) => {
    // Logic to handle input change
    console.log(`Changing name for todo: ${todo.id} to: ${event.target.value}`);
    setNewName(event.target.value);
  };

  const viewListItem = (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="form-check">
        <input
          className="form-check-input me-2"
          type="checkbox"
          id={`todo-${todo.id}`}
          checked={todo.completed}
          onChange={handleCheck}
        />
        <label className="form-check-label" htmlFor={`todo-${todo.id}`}>
          {todo.name}
        </label>
      </div>
      <div>
        <button
          className="btn btn-sm btn-outline-secondary me-2"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button className="btn btn-sm btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
  const editListItem = (
    <li className="list-group-item">
      <form
        onSubmit={handleSave}
        className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3"
      >
        <div className="flex-fill">
          <input
            type="text"
            className="form-control"
            autoComplete="off"
            value={newName}
            onChange={handleChange}
            ref={inputRef}
          />
        </div>
        <div className="d-flex gap-2 mt-2 mt-md-0">
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-danger btn-sm">
            Save
          </button>
        </div>
      </form>
    </li>
  );
  return isEditing ? editListItem : viewListItem;
}

export default Todo;
