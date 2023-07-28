import Todo from "./Todo"

const Todos = ({ todos, handleDelete, onEdit }) => {
  return (
    <div className="todos-container">
      {todos.map((item, index) => (
        <Todo
          onDelete={() => handleDelete(item.id)}
          key={index}
          numbering={index + 1}
          todo={item.item}
          onEdit={() => onEdit(item.id)}
        />
      ))}
    </div>
  );
};

export default Todos