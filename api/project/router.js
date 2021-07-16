const router = require("express").Router();
const Projects = require("./model.js")
const {validateProject} = require("./middleware.js")

router.get("/", (req,res, next)=>{
    Projects.find()
    .then(data=>{
        data.map(project=>{
            project.project_completed ? project.project_completed = true : project.project_completed = false
            return project
        })
        res.status(200).json(data);
    })
    .catch(next())
})

router.post("/", validateProject,(req,res, next)=>{
    Projects.insert(req.body)
    .then(project=>{
        project.project_completed ? project.project_completed = true : project.project_completed = false
        res.status(201).json(project);
    })
    .catch(next())
})

module.exports = router;