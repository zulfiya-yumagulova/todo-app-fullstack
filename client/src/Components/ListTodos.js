import React, { Fragment, useState, useEffect } from "react";
import "./ListTodo.css";
import EditTodo from "./EditTodo.js";
export default function ListTodos() {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    const response = await fetch(`http://localhost:5000/todos`);
    const data = await response.json();
    console.log(data);

    setTodos(data.payload);
    console.log("Todos!!!!!!", todos);
  };
  useEffect(() => {
    getTodos();
  }, []);

  // Delete Todo function
  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
        // headers: { "Content-type": "application/json" },
      });
      setTodos(todos.filter((todo) => todo.id !== id));
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <table className="my-table">
        <thead>
          <tr>
            <th>Description</th>
            <th></th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td data-aria-label="Description">{todo.description}</td>
              <td>{/* <EditTodo todo={todo} /> */}</td>
              <td data-aria-label="Button">
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}
