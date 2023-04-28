const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize('Employees_db', 'postgres', 'bbking', {
    host: 'localhost',
    dialect: "postgres"
});

const Employee = sequelize.define('Employee', {
    Fname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Lname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

const Task = sequelize.define('Task', {
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    priority: {
        type: DataTypes.ENUM('low', 'medium', 'high'),
        defaultValue: 'low'
    },
    status:{
        type: DataTypes.ENUM('not started', 'completed'),
        defaultValue: 'not started'
    }
});

Task.belongsTo(Employee, {foreignKey: 'employeeId'});
Employee.hasMany(Task, { foreignKey: 'employeeId'});

module.exports = {Employee, Task};



