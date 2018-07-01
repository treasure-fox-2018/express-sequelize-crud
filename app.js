const express = require('express')
const app = express()
const students = require('./routes/routes_students.js')
const teachers = require('./routes/routes_teachers.js')
const subjects = require('./routes/routes_subjects.js')
const bodyParser = require('body-parser')

const ejs = require('ejs')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/students', students)

app.use('/teachers', teachers)

app.use('/subjects', subjects)

app.get('/', function(req,res){
    res.render('home')
})

app.listen(3000, console.log('listen 3000'))