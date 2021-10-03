const Todo = require('../models/todo');

exports.addTodo = async (req, res) => {
    if (!req.body.todo) return res.redirect("/");
    try{
        await Todo.create({
            text: req.body.todo
        });
        res.redirect("/");
    }catch (e){
        console.log(e)
    }
}

exports.deleteTodo = async (req, res) => {
    if (!req.params.id) return res.redirect("/");
    try{
        await Todo.findByIdAndRemove(req.params.id)
        res.redirect("/")
    }catch (e) {
        console.log(e)
    }
}

exports.setDoneTodo = async (req, res) => {
    if (!req.params.id) return res.redirect("/");
    try{
       const todo =  await  Todo.findById(req.params.id);
        todo.done = ! todo.done ;
        await todo.save();
        res.redirect("/");
    }catch (e) {
        console.log(e)
    }
}


