const Todo = require('../models/todo');
const todoUtols = require('../utils/crud');
exports.addTodo = (req,res)=>{
    if(! req.body.todo) return res.redirect("/");
    const todo = new Todo(todoUtols.genrateId() , req.body.todo , false);
    todo.save(err =>{
        if(! err) return res.redirect("/");
        else{
            console.log(err);
        }
    })
}

exports.deleteTodo = (req,res)=>{
    if(! req.params.id ) return res.redirect("/");
     Todo.deleteTodo(req.params.id,err=>{
        if(! err) return res.redirect("/");
        console.log(err);
    })
}

exports.setDoneTodo = (req,res)=>{
    if(! req.params.id) return res.redirect("/");
    Todo.setDoneTodo(req.params.id,err=>{
        if(! err) return res.redirect("/");
        console.log(err);
    })
}


