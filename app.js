const express = require("express")
let app = express()
var bodyParser = require('body-parser')
let teacher = require("./routes/teacherRoute")
let subject = require("./routes/subject")
let student = require("./routes/studentRoute")
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')


app.get("/",function(req,res){
    res.send("tes")
})
app.use("/",teacher)
app.use("/",subject)
app.use("/",student)







app.listen(3000)