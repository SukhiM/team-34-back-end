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

module.exports = Employee;

