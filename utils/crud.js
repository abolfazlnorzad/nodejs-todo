const path = require("path");
const fs = require("fs");

const {v4: uuidv4} = require("uuid");

const rootDir = require("../utils/path");

const filePath = path.join(rootDir, "database", "todos.json");

exports.genrateId = () => {
    return uuidv4();
};

exports.readTodos = (callback) => {
    fs.readFile(filePath, (err, fileContent) => {
        if (err) return callback([]);
        else {
            return callback(JSON.parse(fileContent));
        }
    });
};

exports.writeTodos = (todos, callback) => {
    fs.writeFile(filePath, JSON.stringify(todos), (err) => {
        return callback(err);
    });
};

exports.getDoneTodos = (callback) => {
    this.readTodos((todos) => {
        return callback(todos.filter((t) => t.done == true).length);
    });
};

exports.remaingTodos = (callback) => {
    this.readTodos((todos) => {
        return callback(todos.filter((t) => t.done == false).length);
    });
};
