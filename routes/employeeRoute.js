const express = require('express');
const router = express.Router();
const {Task, Employee} = require('../database/models');

//helper function
const ash = require('express-async-handler');

//returns all Employee Route

router.get('/', ash(async (req, res)=> {
   let employees = await Employee.findAll();
   console.log(employees);
   res.status(200).json(employees);
}));

router.get('/:id', ash(async(req, res) => {
   let employees = await Employee.findByPk(req.params.id, {include: [Task]});
   res.status(200).json(employees);
 }));

module.exports = router;