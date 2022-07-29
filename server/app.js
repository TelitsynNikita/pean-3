const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(require('cors')())
app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())


module.exports = app