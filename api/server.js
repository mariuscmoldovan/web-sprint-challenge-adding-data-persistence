// build your server here and require it from index.js
const express = require("express")
const helmet = require('helmet');

const projectRouter = require("./project/router.js")
const resourceRouter = require("./resource/router.js")
const taskRouter = require("./task/router.js")

const server = express()

server.use(helmet());
server.use(express.json())

server.use("/api/projects", projectRouter)
server.use("/api/resources", resourceRouter)
server.use("/api/tasks", taskRouter)

server.use('*', (req, res) => {
    res.json({ message: 'api up and runing'})
})
server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      customMessage: 'Somenting wrong happen',
      message: err.message,
      stack: err.stack,
    })
  })
  
module.exports = server