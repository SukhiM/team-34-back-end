const Employee = require('./employees');
const Task = require('./task');

Task.belongsTo(Employee, {foreignKey: 'employeeId'});
Employee.hasMany(Task, { foreignKey: 'employeeId'});

module.exports = {
    Task,
    Employee
};