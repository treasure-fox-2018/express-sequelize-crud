'use strict'
const express = require('express')
let app = express()
let models = require('./models')
var bodyParser = require('body-parser')
var student = require('./routes/student')
var teacher = require('./routes/teacher')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view angine', 'ejs')


app.use('/',student)
app.use('/',teacher)


app.get('/', function(req, res){
    res.send('Welcome to School Website')
})

app.listen(3000)

