var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var student = require('./routes/student')
var subject = require('./routes/subject')
var teacher = require('./routes/teacher')



app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended: false}))


app.use('/',student)
app.use('/',subject)
app.use('/',teacher)


app.get('/',function(req,res){
    res.render('home')
})

app.listen(3000)