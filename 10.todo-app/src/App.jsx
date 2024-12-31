import { useState } from "react";
import "./App.css";
import ToDoCreate from "./components/ToDoCreate";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  console.log(todos);

  return (
    <>
      <div className="App">
        <div className="main">
          <ToDoCreate onCreateTodo={createTodo} />
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
