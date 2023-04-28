const express = require('express');
const router = express.Router();
const {Task, Employee} = require('./models');

//helper function
const ash = require('express-asyne-handler');

//returns all Employee Route

router.get('/', ash(async (req, res)=> {
   let tasks = await Task.findAll();
   res.status(200).json(tasks);
}));

module.exports = router;