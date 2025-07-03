function FilterButton(props) {
  const handleFilter = () => {
    // Logic to handle filter button click
    console.log(`Filtering by: ${props.name}`);
    props.onFilter(props.name);
  };

  return (
    <button
      type="button"
      className={`btn btn-outline-secondary ${props.active ? "active" : ""}`}
      onClick={handleFilter}
    >
      {props.name}
    </button>
  );
}
export default FilterButton;
