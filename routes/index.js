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
    .then(students => {
        res.render('student', {students})
    })
    .catch(err => {
        console.log(err)
    })
})

routes.get('/student/delete/:id', (req, res) => {
    Student.deleteStudent(req.params.id)
    Student.showStudents()
    .then(students => {
        res.render('student', {students})
    })
    .catch(err => {
        console.log(err)
    })
})

//
// routes.post('/student', (req, res) => {
//     let studentData = req.body
//     res.render('student-show.ejs', {
//         firstname : `${studentData.inputFirstname}`,
//         lastname : `${studentData.inputLastname}`,
//         gender : `${studentData.inputGender}`,
//         birthday : `${studentData.inputDOB}`,
//         email : `${studentData.inputEmail}`,
//         phone : `${studentData.inputPhone}`
//     })
// })
//
// routes.get('/teacher', (req, res) => {
//     res.render('teacher')
// })

module.exports = routes
