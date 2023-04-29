const express = require('express');
const router = express.Router();

const employeeRouter = require('./employeeRoute');
const taskRouter = require('./taskRoute');

router.use('/employeeRoute', employeeRouter);
router.use('/taskRoute', taskRouter);

module.exports = router;