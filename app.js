const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')

const routesIndex   = require('./routes/index')
const routesTeacher = require('./routes/teacher')
const routesStudent = require('./routes/student')
const routesSubject = require('./routes/subject')

app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'ejs')
app.use(routesIndex)
app.use(routesTeacher)
app.use(routesStudent)
app.use(routesSubject)

app.listen(port ,function () {
  console.log("server is running")
})