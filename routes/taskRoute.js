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

// Create a new task
router.post('/create', ash(async (req, res) => {
   const task = await Task.create(req.body);
   res.status(201).json(task);
 }));
 
 // Update a task by ID
 router.put('/update/:id', ash(async (req, res) => {
   const task = await Task.findByPk(req.params.id);
   if (!task) {
     res.status(404).json({ message: 'Task not found' });
   } else {
     const updatedTask = await task.update(req.body);
     res.json(updatedTask);
   }
 }));
 
 // Delete a task by ID
 router.delete('/delete/:id', ash(async (req, res) => {
   const task = await Task.findByPk(req.params.id);
   if (!task) {
     res.status(404).json({ message: 'Task not found' });
   } else {
     await task.destroy();
     res.status(204).send();
   }
 }));

module.exports = router;