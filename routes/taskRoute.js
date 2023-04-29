const express = require('express');
const router = express.Router();
const {Task, Employee} = require('../database/models');

//helper function
const ash = require('express-async-handler');

//returns all Task routes

router.get('/', ash(async (req, res)=> {
   let tasks = await Task.findAll();
   res.status(200).json(tasks);
}));

router.get('/:id', ash(async (req, res) => {
   let task = await Task.findByPk(req.params.id);
   res.status(200).json(course);
}));

module.exports = router;