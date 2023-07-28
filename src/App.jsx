import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Todos from "./components/Todos";

const App = () => {
  const [todo, setTodo] = useState({
    item: "",
    id: null,
  });
  const [error] = useState("");
  const [todos, setTodos] = useState([
    {
      item: "I want to eat",
      id: 1,
    },
  ]);

  const AddTodo = (e) => {
    // console.log(todo);
    e.preventDefault();
    setTodos((prevTodo) => {
      return [...prevTodo, { item: todo.item, id: todo.id }];
    });
    setTodo({
      item: "",
      id: null,
    });
  };

  const handleDelete = (id) => {
    setTodos(() => {
      return todos.filter((item) => {
        return item.id !== id;
      });
    });
  };

  const onUpdate = (id) => {
    setTodo(() => {
      return todos.map((item) => {
        return item.id === id ? item : null;
      });
    });
  };

  return (
    <div className="container">
      <Header headerTitle="TODO" />
      <main>
        <Form
          todo={todo}
          error={error}
          setTodo={setTodo}
          onSubmitTodo={AddTodo}
        />
        <br />
        <br />
        <br />
        <Todos onEdit={onUpdate} todos={todos} handleDelete={handleDelete} />
      </main>
    </div>
  );
};

export default App;
