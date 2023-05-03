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
   let tasks = await Task.findByPk(req.params.id, {include: [Employee]});
   res.status(200).json(tasks);
}));

module.exports = router;