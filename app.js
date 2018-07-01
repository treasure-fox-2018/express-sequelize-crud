const express = require('express')
const app = express()
const Student = require('./routes/student')
const bodyParser = require('body-parser')

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/', Student)

app.listen(3000)