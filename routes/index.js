'use strict'

const routes = require('express').Router()
const path = require('path')
const ejs = require('ejs')
const Student = require('../Controllers/controller-student.js')

routes.get('/', (req, res) => {
    res.render('homepage')
})

routes.get('/student', (req, res) => {
    Student.showStudents()
    .then(students => {
        res.render('student', {students})
    })
    .catch(err => {
        console.log(err)
    })
})

routes.get('/student/add', (req, res) => {
    res.render('student-add')
})

routes.post('/student/add', (req, res) => {
    let studentData = req.body
    Student.addStudent(studentData)
    Student.showStudents()
    .then(() => {
        res.redirect('/student')
    })
    .catch(err => {
        console.log(err)
    })
})

routes.get('/student/edit/:studentId', (req, res) => {
    let studentId = req.params.studentId

    Student.findStudentById(req.params.studentId)
    .then(student => {
        res.render('student-edit', {student:student})
    })
    .catch(err => console.log(err))
})

routes.post('/student/edit/:studentId', (req, res) => {
    let studentId = req.params.studentId

    let newStudentFirstname = req.body.first_name
    let newStudentLastname = req.body.last_name

    Student.updateStudent(studentId, newStudentFirstname, newStudentLastname)
    .then(() =>
        res.redirect('/student')
    )
    .catch(err => console.log(err))
})

routes.get('/student/delete/:id', (req, res) => {
    Student.deleteStudent(req.params.id)
    Student.showStudents()
    .then(() => {
        res.redirect('/student')
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = routes
