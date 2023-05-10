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
   let employee = await Employee.findByPk(req.params.id, {include: [Task]});
   res.status(200).json(employee);
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
router.post('/create', ash(async (req, res) => {
   let newEmployee = await Employee.create(req.body);
   res.status(201).json(newEmployee);
 }));
 
 // Update an employee by id
 router.put('/update/:id', ash(async (req, res) => {
    await Employee.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    let employee = await Employee.findByPk(req.params.id, {include: [Task]});
    res.status(201).json(employee);
 }));
 
 // Delete an employee by id
 router.delete('/delete/:id', ash(async (req, res) => {
   const employee = await Employee.findByPk(req.params.id);
   if (!employee) {
     return res.status(404).json({ error: 'Employee not found' });
   }
   await employee.destroy();
   res.status(204).end();
 }));


module.exports = router;