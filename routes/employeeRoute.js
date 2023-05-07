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

 // Get an employee and their tasks by id
router.get('/employees/:id', ash(async (req, res) => {
   const employee = await Employee.findByPk(req.params.id, { include: [Task] });
   if (!employee) {
     return res.status(404).json({ error: 'Employee not found' });
   }
   res.status(200).json(employee);
 }));

 // Create a new employee
router.post('/employees', ash(async (req, res) => {
   const { Fname, Lname, department } = req.body;
   const employee = await Employee.create({ Fname, Lname, department });
   res.status(201).json(employee);
 }));
 
 // Update an employee by id
 router.put('/employees/:id', ash(async (req, res) => {
   const { Fname, Lname, department } = req.body;
   const employee = await Employee.findByPk(req.params.id);
   if (!employee) {
     return res.status(404).json({ error: 'Employee not found' });
   }
   employee.Fname = Fname;
   employee.Lname = Lname;
   employee.department = department;
   await employee.save();
   res.status(200).json(employee);
 }));
 
 // Delete an employee by id
 router.delete('/employees/:id', ash(async (req, res) => {
   const employee = await Employee.findByPk(req.params.id);
   if (!employee) {
     return res.status(404).json({ error: 'Employee not found' });
   }
   await employee.destroy();
   res.status(204).end();
 }));


module.exports = router;