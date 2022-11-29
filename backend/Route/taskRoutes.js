//Bring the Task
const express = require('express');
const router = express.Router();

const { home } = require('../Controllers/taskController');


router.get('/', home);

module.exports = router;