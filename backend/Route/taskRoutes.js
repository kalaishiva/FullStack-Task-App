//Bring the Task
const express = require('express');

const { home } = require('../Controllers/taskController');

const router = express.Router();

router.get('/', home);

module.exports = router;