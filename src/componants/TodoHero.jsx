import { useState } from "react";
import style from "./TodoHero.module.css";

const TodoHero = ({ handleOnAddClick }) => {
  const [todoName, setToDoName] = useState("");
  const [todoDate, setToDoDate] = useState("");

  const handleNameChange = (event) => {
    setToDoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setToDoDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    handleOnAddClick(todoName, todoDate);
    setToDoName("");
    setToDoDate("");
  };
  return (
    <div className="row">
      <div className="col-6">
        <input
          className={style.inputBox}
          type="text"
          placeholder="enter todo here"
          value={todoName}
          onChange={handleNameChange}
        />
      </div>
      <div className="col-3">
        <input
          className={style.inputBox}
          type="date"
          value={todoDate}
          onChange={handleDateChange}
        />
      </div>
      <div className="col-3">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handleAddButtonClicked}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoHero;
