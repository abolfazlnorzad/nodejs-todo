const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        minlength: 3,
        required: true,
        maxlength: 255,
        trim: true
    },

    done: {
        type: Boolean,
        required: false,
        default: false
    }
});

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo;