import React, { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit, FaCheck } from "react-icons/fa";
import "../App.css";

function Todo({ todo, onRemoveTodo }) {
  const { id, content } = todo;

  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const removeTodo = () => {
    onRemoveTodo(id);
  };

  const updateTodo = () => {};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid lightgrey",
        padding: "10px",
        marginTop: "10px",
        fontFamily: "arial",
      }}
    >
      <div>
        {editable ? (
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            style={{ width: "380px" }}
            className="todo-input"
            type="text"
          />
        ) : (
          content
        )}
      </div>
      <div>
        <IoIosRemoveCircle className="todo-icons" onClick={removeTodo} />
        {editable ? (
          <FaCheck className="todo-icons" onChange={updateTodo} />
        ) : (
          <FaEdit className="todo-icons" onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
}

export default Todo;
