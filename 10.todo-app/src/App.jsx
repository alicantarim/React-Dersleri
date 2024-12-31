import { useState } from "react";
import "./App.css";
import ToDoCreate from "./components/ToDoCreate";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    // ! debugger;
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  };
  // ! createTodo fonksiyonuna TodoCreate componenti erişemediği için
  // ! 21. satırda; onCreateTodo propsu ile ToDoCreate componentine geçiyoruz.
  console.log(todos);

  return (
    <>
      <div className="App">
        <div className="main">
          <ToDoCreate onCreateTodo={createTodo} />
          <TodoList todos={todos} onRemoveTodo={removeTodo} />
        </div>
      </div>
    </>
  );
}

export default App;
