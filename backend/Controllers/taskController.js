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

//important
// const importantTasks = async(req, res) => {
//     try {

//         const query = { important: `${req.params.important}` }
//             //console.log(query);
//         const importantTasks = await Task.find(query);
//         //console.log(importantTasks);
//         res.status(200).json({
//             success: true,
//             importantTasks,

//         })


//     } catch (error) {
//         console.log(error);
//         res.status(400).json({
//             success: false,
//             message: error.message,
//         })
//     }
// }

//importantTask

const importantTask = async(req, res) => {
        try {
            const { taskId, todo, important } = req.body;
            const importantResult = await Task.findOneAndUpdate({
                id: taskId,
                'todo.todo': todo,
            }, {
                $set: {
                    'todo.$.important': important,
                }
            });
            res.status(200).json({
                success: true,
                importantResult,
            })

        } catch (error) {
            console.log(error);
            res.status(400).json({
                success: false,
                message: error.message,
            })

        }
    }
    //getImportantTask
const getImportantTask = async(req, res) => {
    try {
        const query = {
            $project: {
                todo: {
                    $filter: {
                        input: "$todo",
                        as: "todoitem",
                        cond: { $eq: ["$$todoitem.important", true] }
                    }
                }
            }
        };
        console.log(query);
        const task = await Task.aggregate([query]);
        console.log(task);
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


//getCompletedTask
const getCompletedTask = async(req, res) => {
    try {
        const query = {
            $project: {
                todo: {
                    $filter: {
                        input: "$todo",
                        as: "todoitem",
                        cond: { $eq: ["$$todoitem.complete", true] }
                    }
                }
            }
        };
        console.log(query);
        const task = await Task.aggregate([query]);
        console.log(task);
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





//delete singletodo 
const deletetodo = async(req, res) => {
    try {
        const { todoId, todo } = req.body;
        console.log(todoId);
        const deleteTodoTask = await Task.findByIdAndUpdate({
            _id: todoId
        }, {
            "todo": todo
        });
        res.status(200).json({
            success: true,
            deleteTodoTask,
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

//Completed Task
const completedTask = async(req, res) => {
    try {
        const { taskId, todo, complete } = req.body;

        console.log(taskId + ":" + todo + ":" + complete);

        const completeResult = await Task.findOneAndUpdate(

            {
                id: taskId,
                'todo.todo': todo
            }, {
                $set: {
                    'todo.$.complete': complete
                }
            });

        res.status(200).json({
            success: true,
            completeResult,

        })


        // const query = { complete: `${req.params.complete}` }  
        // const completeResult = await Task.find(query);
        // res.status(200).json({
        //     success: true,
        //     completeResult,

        // })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })

    }
}




module.exports = { home, createTask, getTasks, editTask, deleteTask, deletetodo, removeTask, importantTask, completedTask, getImportantTask, getCompletedTask }