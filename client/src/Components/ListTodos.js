import React, { Fragment, useState, useEffect } from "react";

export default function ListTodos() {
  const [todos, setTodos] = useState();
  const getTodos = async () => {
    const response = await fetch(`http://localhost:5000/todos`);
    const todosArray = await response.json();
    console.log(todosArray);

    setTodos(todosArray);
    console.log("Todos!!!!!!", todos);
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}
