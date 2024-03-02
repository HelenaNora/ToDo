const asyncHandler = require("express-async-handler");
const Todo = require("../models/Todo");
exports.index = asyncHandler(async (req, res, next) => {
  const allTodo = await Todo.find();
  res.render("index", {
    pageTitle: "Todo",
    todo: allTodo,
  });
});

exports.save = asyncHandler(async (req, res, next) => {
  const todo = req.body.todo;
  // console.log(task);
  const newTodo = new Todo({
    todo: todo,
  });
  newTodo.save();
  res.redirect("/");
});

exports.delete = asyncHandler(async (req, res, next) => {
  // console.log(req.params._id);
  const todoID = req.params._id;
  // console.log(id);
  await Todo.deleteOne({ _id: todoID });
  res.redirect("/");
});
