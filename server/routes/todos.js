import express from "express";
var todosRouter = express.Router();

/* GET users listing. */
todosRouter.get("/", function (req, res, next) {
  res.json({ message: "All the todos" });
});

export default todosRouter;
