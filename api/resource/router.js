// build your `/api/resources` router here
const router = require("express").Router();
const Resources = require("./model.js")

router.get("/", (req,res, next)=>{
    Resources.find()
    .then(data=>{
        res.status(200).json(data);
    })
    .catch(next())
})

router.post("/", (req,res, next)=>{
    Resources.insert(req.body)
    .then(resource=>{
        res.status(201).json(resource);
    })
    .catch(next())
})

module.exports = router;