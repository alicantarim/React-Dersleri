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

  //? todo.id -> Buradaki todo nun id si
  //? newTodo.id -> Ekrandan girilen todo nun id si
  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    });

    setTodos([...updatedTodos]);
  };

  // ! createTodo fonksiyonuna TodoCreate componenti erişemediği için
  // ! 21. satırda; onCreateTodo propsu ile ToDoCreate componentine geçiyoruz.
  console.log(todos);

  return (
    <>
      <div className="App">
        <div className="main">
          <ToDoCreate onCreateTodo={createTodo} />
          <TodoList
            todos={todos}
            onRemoveTodo={removeTodo}
            onUpdateTodo={updateTodo}
          />
        </div>
      </div>
    </>
  );
}

export default App;
