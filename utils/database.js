const mongoose = require('mongoose')

mongoose
    .connect("mongodb://localhost/todo_db")
    .then(res=>console.log("database connected"))
    .catch(err=>console.log("warning in the connect db"))
