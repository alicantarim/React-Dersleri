import React from "react";
import "../App.css";
import { useState } from "react";
function ToDoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const createTodo = () => {
    // ! debugger;
    if (!newTodo) return; //! Eğer kullanıcı input alanını boş bırakıp ToDo Oluştur butotuna basarsa işlem yapmayacak..
    const request = {
      id: Math.floor(Math.random() * 999999999),
      content: newTodo,
    };
    onCreateTodo(request);
  };

  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo-input"
        type="text"
        placeholder="ToDo giriniz."
      />
      <button onClick={createTodo} className="todo-create-button">
        ToDo Oluştur
      </button>
    </div>
  );
}

export default ToDoCreate;
