import TodoItem from "./TodoItem";

const TodoLists = ({ todoItems, handleDeleteItem }) => {
  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem
          todoName={item.todoName}
          todoDate={item.todoDate}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
    </div>
  );
};

export default TodoLists;
