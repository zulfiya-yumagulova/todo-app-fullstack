import todos from "../../todosData.js";
import query from "../index.js";
const sqlString = ``;

async function populateTodosTable() {
  for (let i = 0; i < todos.length; i++) {
    const todoDescription = todos[i].description;
    console.log(todos[i]);

    const data = await query(
      `INSERT INTO todos (description) VALUES ($1) RETURNING description`,
      [todoDescription]
    );
    console.log(data);
  }
}

populateTodosTable();
