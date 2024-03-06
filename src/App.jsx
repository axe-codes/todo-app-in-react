import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoHero from "./componants/TodoHero";
import TodoLists from "./componants/TodoLists";
import { useState } from "react";
import WelcomeMessage from "./componants/WelcomeMessage";
function App() {
  const todoList = [
    { todoName: "Go To Gym", todoDate: "Everyday" },
    { todoName: "Do Yoga", todoDate: "Everyday" },
    { todoName: "Meditate for 5 mins", todoDate: "Everyday" },
    { todoName: "Drink 4 liter water", todoDate: "Everyday" },
    { todoName: "Eat Healthy Food", todoDate: "Everydayy" },
  ];

  const [todoItems, setToDoItems] = useState(todoList);

  const haldleAddClicked = (todoName, todoDate) => {
    const newToDoItems = [
      ...todoItems,
      { todoName: todoName, todoDate: todoDate },
    ];
    setToDoItems(newToDoItems);
  };

  const handleDeleteItem = (todoName) => {
    const newToDoItems = todoItems.filter((item) => item.todoName !== todoName);
    setToDoItems(newToDoItems);
  };
  return (
    <div className="todoContainer">
      <h2 className="todoHeading">Todo App</h2>
      <TodoHero handleOnAddClick={haldleAddClicked} />
      {todoItems.length == 0 && <WelcomeMessage />}
      <TodoLists todoItems={todoItems} handleDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;
