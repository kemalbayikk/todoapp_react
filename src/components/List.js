import React from "react";
import Todo from "./Todo";

function List({ todos, setTodos, filteredTodos }) {
  return (
    <div className="list-container">
      <ul className="list">
        {filteredTodos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            text={todo.text}
            todo={todo}
          ></Todo>
        ))}
      </ul>
    </div>
  );
}

export default List;
