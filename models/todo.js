const todoUtils = require("../utils/crud");

class Todo {
  constructor(id, text, done = false) {
    this.id = id;
    this.text = text;
    this.done = done;
  }

  save(callback) {
    todoUtils.readTodos((todos) => {
      todos.push(this);
      todoUtils.writeTodos(todos, (err) => {
        callback(err);
      });
    });
  }

  static fetchAll(callback) {
    todoUtils.readTodos((todos) => {
      return callback(todos);
    });
  }

  static deleteTodo(id, callback) {
    todoUtils.readTodos((todos) => {
      const filtredTodos = todos.filter((t) => t.id != id);
      todoUtils.writeTodos(filtredTodos, (err) => {
        return callback(err);
      });
    });
  }

  static setDoneTodo(id, callback) {
    todoUtils.readTodos((todos) => {
      const todoIndex = todos.findIndex((t) => t.id == id);
      const todo = todos[todoIndex];
      todo.done = !todo.done;
      todos[todoIndex] = todo;
      todoUtils.writeTodos(todos, (err) => {
        return callback(err);
      });
    });
  }
}

module.exports = Todo;
