const getAllTasks = (req, res) => {
    res.status(200).send("All tasks from controller")
}
const getTask = (req, res) => {
    res.status(200).send("A task")
}
const createTask = (req, res) => {
    res.status(200).send("Create a task from controller")
}
const updateTask = (req, res) => {
    res.status(200).send("Update a task from controller")
}
const deleteTask = (req, res) => {
    res.status(200).send("Delete a task from controller")
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}