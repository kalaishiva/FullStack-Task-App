const Task = require("../Modal/taskModal")

//Home
const home = (req, res) => {
    res.send("Welcome to home page");
}

//create new entry in db
const createTask = async(req, res) => {
    try {
        //collect the information
        const { title, todo, important, complete } = req.body;

        //validate the information
        if (!title || !todo) {
            throw new Error("Title and Todo are required")
        }

        //create task
        const task = await Task.create({
            title,
            todo,
            important,
            complete,
        });
        res.status(200).json({
            success: true,
            message: 'New Task Created',
            task,
        })
    } catch (error) {
        console.log(error)
    }
}

//get task

const getTasks = async(req, res) => {
    try {
        const task = await Task.find();
        res.status(200).json({
            success: true,
            task,
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message,
        })

    }
}

//Edit task

const editTask = async(req, res) => {
    try {

        const task = await Task.findByIdAndUpdate(req.params.id, req.body);

        res.status(200).json({
            success: true,
            message: "Task Updated Successfully",
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })

    }
}


//delete task
const deleteTask = async(req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: "Task deleted successfully",

        })


    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

//remove Task
const removeTask = async(req, res) => {
    try {

        const query = { title: `${req.params.title}` };
        console.log(query);
        const task = await Task.deleteMany(query);
        //const task = await Task.find(req.params.id, req.body).deleteMany()

        res.status(200).json({
            success: true,
            message: "Task removed successfully",
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })

    }
}


module.exports = { home, createTask, getTasks, editTask, deleteTask, removeTask }