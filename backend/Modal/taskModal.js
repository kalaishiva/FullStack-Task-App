const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        default: null,
        require: [true, 'Title is require']
    },
    todo: {
        type: Array,
        require: [true, 'Task is require']
    },
    /*  important: {
         type: Boolean,
     },
     complete: {
         type: Boolean,
     } */
});

module.exports = mongoose.model("Task", taskSchema);