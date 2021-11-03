const express = require('express')

const SchemeRouter = require('./schemes/scheme-router.js')

const server = express()

server.use(express.json())
server.use('/api/schemes', SchemeRouter)

server.use('*', (req, res, next) => {
    next({ status: 404, message: 'not found' })
})

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server