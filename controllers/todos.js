const Todo = require("../models/todo");
const todoUtils = require("../utils/crud");

exports.getAll = (req, res) => {
  todoUtils.getDoneTodos((doneTodos) => {
    todoUtils.remaingTodos((remaningTodos) => {
      Todo.fetchAll((todos) => {
        res.render("index", {
          pageTitle: "صفحه اصلی",
          todos,
          remaningTodos,
          doneTodos,
        });
      });
    });
  });
};
