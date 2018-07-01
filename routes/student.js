const express = require('express')
const router = express.Router()
const Controller = require('../controller')

router.get('/student',(req,res) => {
   Controller.getDataTeacher()
   .then((data_teacher) => {
       res.render('student',{data_teacher})
   })
})

router.get('/student/add',(req,res) => {
    res.render('add_student')
})

router.post('/student/add',(req,res) => {
    Controller.addStudent(req.body)
    .then((data_student) => {
        res.render('add_student', {data_student})
    })
})


module.exports = router