const { Sequelize, DataTypes } = require("sequelize")
const db = require('../db')

const Employee = db.define('Employee', {
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



