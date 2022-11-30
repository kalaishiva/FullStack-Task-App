//Bring the Task
const express = require('express');
const router = express.Router();

const { home, createTask, getTasks, editTask, deleteTask, removeTask } = require('../Controllers/taskController');


router.get('/', home);
router.post('/createTask', createTask)
router.get('/getTasks', getTasks);
router.put('/editTask/:id', editTask);
router.delete('/deleteTask/:id', deleteTask);
router.delete('/removeTask/:title', removeTask);

module.exports = router;