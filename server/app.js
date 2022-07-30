// require some libraries
const express = require('express')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const path = require('path')
const app = express()

// require some files
const router = require('./routes/index')
const models = require('./models/index')
const errorHandling = require('./middleware/ErrorHandlingMiddleware')

// middleware
app.use(require('cors')())
app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(fileUpload({}))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))


// routes
app.use('/api', router)

// middleware for error
app.use(errorHandling)

module.exports = app