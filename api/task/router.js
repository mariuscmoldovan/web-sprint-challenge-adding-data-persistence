// build your `/api/tasks` router here
const router = require("express").Router();
const Tasks = require("./model.js")

router.get("/", (req,res, next)=>{
    Tasks.find()
    .then(data=>{
        data.map(task=>{
            task.task_completed ? task.task_completed = true : task.task_completed = false
            return task
        })
        res.status(200).json(data);
    })
    .catch(next())
})

router.post("/", (req,res, next)=>{
    Tasks.insert(req.body)
    .then(task=>{
        task.task_completed ? task.task_completed = true : task.task_completed = false
        res.status(201).json(task);
    })
    .catch(next())
})

module.exports = router;