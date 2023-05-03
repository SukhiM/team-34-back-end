const express = require('express');
const router = express.Router();
const {Task, Employee} = require('../database/models');
const {getAllEmployees} = require('../database/employeeControl')

//helper function
const ash = require('express-async-handler');

//returns all Employee Route

router.get('/', ash(async (req, res)=> {
   let employees = await Employee.findAll();
   res.status(200).json(employees);
}));

module.exports = router;