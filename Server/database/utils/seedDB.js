const {Task, Employee} = require('../models');

const seedDB = async () => {
    const dummyEmployee = await Employee.create({
        Fname: "J",
        Lname: "C",
        department: "Business"
    });

    const dummyTask = await Task.create({
        description: "Take out trash",
        priority: "low",
        status: "completed"
    });

    await dummyTask.setEmployee(dummyEmployee);
};

module.exports = seedDB;