const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ejs = require('ejs')


const router = require('./routes'),
  students = require('./routes/students'),
  teachers = require('./routes/teachers'),
  subjects = require('./routes/subjects')


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({
  extended: false
}))


app.use('/', router)
  .use('/students', students)
  .use('/teachers', teachers)
  .use('/subjects', subjects)


app.listen(3000, () => console.log('running 🎉 '))
