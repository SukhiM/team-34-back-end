const express = require('express');
const router = express.Router();

const employeeRouter = require('./employeeRoute');
const taskRouter = require('./taskRoute');

router.use('/employees', employeeRouter);
router.use('/tasks', taskRouter);

module.exports = router;