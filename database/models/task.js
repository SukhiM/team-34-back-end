const { Sequelize, DataTypes } = require("sequelize")
const db = require('../db')

const Task = db.define('Task', {
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

module.exports = Task;