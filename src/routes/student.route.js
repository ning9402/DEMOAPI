// handles all requests to /api/students endpoint
module.exports = (app) => {
  const students = require("../controllers/student.controller");

  const router = require("express").Router();

  router.get("/", students.findAll);

  // GET student by Id
  router.get("/:id", students.findById);

  app.use("/api/student", router);
};
