const route = require("express").Router();
const todoController = require("../controllers/todoController");

route.post("/todos", todoController.createTodo);
route.post("/todos/:todoId", todoController.deleteTodo);
route.get("/", todoController.index);

module.exports = route;
