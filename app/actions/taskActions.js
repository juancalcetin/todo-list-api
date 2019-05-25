const Task = require("../models/Task")

const createTask = (data) => {
    return Task.create(data)
}
const getAllTask = () => {
    return Task.find({is_active: true})
}

const getOneTask = (name) => {
    return Task.findOne({name})
}
const updateTask = (name, json) => {
    return Task.findOneAndUpdate({name}, {$set: json}, {new: true})
}

const completedTask = (name) => {
    return Task.findOneAndUpdate({name}, {$set: {completed: true}}, {new: true})
}

const deactivateTask = (name) => {
    return Task.findOneAndUpdate({name}, {$set: {is_active: false}}, {new: true})
}

module.exports = {
    createTask,
    getAllTask,
    getOneTask,
    updateTask,
    completedTask,
    deactivateTask
}
