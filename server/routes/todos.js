import express from "express";
var todosRouter = express.Router();

/* GET users listing. */
todosRouter.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

export default todosRouter;
