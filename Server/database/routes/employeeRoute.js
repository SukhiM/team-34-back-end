const express = require('express');
const router = express.Router();
const {Employee} = require('./models');

//helper function
const ash = require('express-asyne-handler');

//Employee Route

router.get('/', ash(async (req, res)=> {
   let employees = await Employee.findAll();
   res.status(200).json(employees);
}));

module.exports = router;