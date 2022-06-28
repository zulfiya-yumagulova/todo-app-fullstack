import query from "../index.js";

// Creating a table
const sqlString = `CREATE TABLE IF NOT EXISTS todos (id SERIAL PRIMARY KEY, description VARCHAR(200))`;

async function createTodosTable() {
  const data = await query(sqlString);
  console.log("Created table", data);
}

createTodosTable();
