//Bring the Task
const express = require('express');
const router = express.Router();

const { home, createTask, getTasks, editTask, deleteTask, deletetodo, removeTask, importantTasks, importantTask, completedTask } = require('../Controllers/taskController');


router.get('/', home);
router.post('/createTask', createTask)
router.get('/getTasks', getTasks);
router.put('/editTask/:id', editTask);
router.delete('/deleteTask/:id', deleteTask);
router.delete('/removeTask/:title', removeTask);
router.put('/deleteTodo/', deletetodo);
router.put('/importantTasks/:important', importantTasks);
router.put('/completedTask/', completedTask);
router.put('/importantTask/', importantTask);

module.exports = router;