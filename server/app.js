// require some libraries
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//require some files
const router = require('./routes/index')

// middleware
app.use(require('cors')())
app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

//routes
app.use('/api', router)

module.exports = app