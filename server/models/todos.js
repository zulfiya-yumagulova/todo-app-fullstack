import query from "../db/index.js";

// Get all todos
export async function getAllTodos() {
  const data = await query(`SELECT * FROM todos`);
  return data.rows;
}

// Get a todo by id
export async function getTodoById(todo) {
  const data = await query(`SELECT * FROM todos where id=$1`, [todo]);
  return data.rows;
}

// Create a todo
export async function createTodo(todo) {
  const data = await query(
    `INSERT INTO todos (description) VALUES($1) RETURNING *`,
    [todo]
  );
  return data.rows;
}

// Delete a todo
export async function deleteTodo(todoDelete) {
  const data = await query(`DELETE FROM todos WHERE id=$1`, [todoDelete]);
  return data.rows;
}

// Update a todo
export async function updateTodo(idTodo, todo) {
  const data = await query(`UPDATE todos SET description=$1 WHERE id=$2`, [
    todo,
    idTodo,
  ]);
  return data.rows;
}
