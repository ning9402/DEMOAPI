module.exports = (app) => {
  const todos = require("../controllers/todo.controller");

  const router = require("express").Router();

  //get all users
  router.get("/", todos.findAll);

  //get user by ID
  router.get("/:id", todos.findById);

  app.use("/api/todos", router);
};
