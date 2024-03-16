const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
const Todo = require("../models/Todo");

exports.index = asyncHandler(async (req, res) => {
  const allTodo = await Todo.find();
  res.render("index", {
    pageTitle: "Todo",
    todo: allTodo,
    error: null,
  });
});

exports.createTodo = [
  body("todo").trim().notEmpty().isLength({ min: 5, max: 30 }).escape(),
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const allTodo = await Todo.find();
      return res.status(400).render("index", {
        pageTitle: "Todo",
        todo: allTodo,
        error: errors.array()[0].msg,
      });
    }
    const todo = req.body.todo;
    const newTodo = new Todo({
      todo: todo,
    });
    await newTodo.save();

    res.redirect("/");
  }),
];

exports.deleteTodo = asyncHandler(async (req, res, next) => {
  const todoId = req.params.todoId;
  // console.log(todoId);
  await Todo.findByIdAndDelete(todoId);
  res.redirect("/");
});
