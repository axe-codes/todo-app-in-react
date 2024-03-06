function TodoItem({ todoName, todoDate, handleDeleteItem }) {
  return (
    <div className="row TodoItems">
      <div className="col-6"> {todoName} </div>
      <div className="col-3"> {todoDate} </div>
      <div className="col-3">
        {" "}
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => handleDeleteItem(todoName)}
        >
          Delete
        </button>{" "}
      </div>
    </div>
  );
}

export default TodoItem;
