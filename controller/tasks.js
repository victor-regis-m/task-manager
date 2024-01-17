const Task = require('../models/task')

const getAllTasks = async (req, res) => {
    const tasks = await Task.find().catch((err) => res.status(500).send(err.message))
    res.status(200).send({tasks})
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body).catch((err)=> res.status(422).send(err.message));
    res.status(201).json({task});
}

const getTask = async (req, res) => {
    try{
        const {id:taskId} = req.params
        const task = await Task.findById(taskId)
        if(task == null)
            res.status(404).json({mes: `Object not found for id ${taskId}`})
        else
            res.status(200).send({task})
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}

const updateTask = async (req, res) => {
    const tasks = await Task.findByIdAndUpdate(req.params.id).catch((err) => res.status(500).send(err.message))
    res.status(200).send(`Task '${req.params.id}' deleted`)
}

const deleteTask = async (req, res) => {
    try {
        const {id:taskId} = req.params
        const task = await Task.findByIdAndDelete(taskId)
        if(task == null)
            res.status(404).json({mes: `Object not found for id ${taskId}`})
        else
            res.status(200).send(`Task '${req.params.id}' deleted`)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}