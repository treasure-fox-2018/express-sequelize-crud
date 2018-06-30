'use strict'
const express = require('express')
const app = express()
const routes = require('./routes/index')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.use('/', routes)
app.listen(3000, () => {
    console.log('App listening on port 3000')
})