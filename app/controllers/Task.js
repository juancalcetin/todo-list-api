const {
    createTask,
    getAllTask,
    getOneTask,
    updateTask,
    completedTask,
    deactivateTask
} = require("../actions")

const newTask = (req, res) => {
    createTask(req.body)
        .then((task) => {
            res.status(201).json({message: "Task has create"})
        }) 
        .catch((error) => {
            return res.status(400).json(error)
        })
}

const getTasks = async(req, res) => {
    getAllTask()
        .then((tasks) => {
            return res.status(200).json(tasks)
        })
    .catch((error) => {
        return res.status(400).json(error)
    })

}

const getTask = async(req, res) =>
    getOneTask(req.params.name)
        .then((task) =>{
            task 
                ? res.status(200).json(task)
                : res.status(400).json({message: "is not exist"})
        })
        .catch((error) => {
            res.status(400).json(error)
        })

const updateTaskName = async(req, res) => {
    updateTask(req.params.name, req.body)
    .then((task) =>{
        task 
            ? res.status(200).json(task)
            : res.status(400).json({message: "is not exist"})
    })
    .catch((error) => {
        res.status(400).json(error)
    })
}

const completeTask = async(req, res) => {
    completedTask(req.params.name, req.params.completed)
    .then((task) =>{
        task 
        ? res.status(200).json(task)
        : res.status(400).json({message: "is not exist"})
})
.catch((error) => {
    res.status(400).json(error)

    })
}

const taskNoactive = async(req, res) => {
    deactivateTask(req.params.name, req.params.is_active)
    .then((task) =>{
        task
        ? res.status(200).json(task)
        : res.status(400).json({message: "not existing"})
    })
    .catch((error) => {
        res.status(400).json(error)
    })
}
module.exports = {
    newTask,
    getTasks,
    getTask,
    updateTaskName,
    completeTask,
    taskNoactive
}