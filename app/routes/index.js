const express = require("express")

const {
    newTask,
    getTasks,
    getTask,
    updateTaskName,
    completeTask,
    taskNoactive
    
} = require("../controllers/Task")

const router = express.Router()

router.get('/', (req,res) => {
    res.status(200).json({message: "Server c"})
})

router.post("/task", newTask)
router.get("/tasks", getTasks)
router.get("/task/:name", getTask)
router.patch("/task/:name", updateTaskName)
router.patch("/complete/:name", completeTask)
router.patch("/deactivate/:name", taskNoactive)
module.exports = router;