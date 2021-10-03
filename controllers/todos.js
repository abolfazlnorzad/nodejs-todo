const Todo = require("../models/todo");

exports.getAll = async (req, res) => {
    try{
        const todos = await Todo.find();
        const doneTodos = await Todo.countDocuments({done:true});
        res.render("index",{
            pageTitle: "صفحه اصلی",
            todos,
            remaningTodos :todos.length-doneTodos,
            doneTodos,
        })
    }catch (e) {
        console.log(e)
    }
};
