import express from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
} from "../models/todos.js";
const todosRouter = express.Router();

// Creating Routes

/* GET TODOS listing. */
todosRouter.get("/", async function (req, res) {
  const data = await getAllTodos();
  res.json({ message: "All the todos", payload: data });
});

// GET a todo by id
todosRouter.get("/:id", async function (req, res) {
  const { id } = req.params;
  const todoById = await getTodoById(id);
  res.json({ message: `A todo with id ${id}`, payload: todoById });
});
// POST a todo
todosRouter.post("/", async function (req, res) {
  const { description } = req.body;
  const newTodo = await createTodo(description);
  res.json({ message: "A todo was created", payload: newTodo });
});

// Update a todo
todosRouter.put("/:id", async function (req, res) {
  const { id } = req.params;
  const { description } = req.body;
  const updatedTodo = await updateTodo(id, description);
  res.json({
    success: true,
    message: `A todo with id ${id} was updated`,
  });
});

// Delete a todo by id
todosRouter.delete("/:id", async function (req, res) {
  const { id } = req.params;
  const deletedTodo = await deleteTodo(id);
  res.json({
    success: true,
    message: `A todo with id ${id} was deleted`,
  });
});

export default todosRouter;
