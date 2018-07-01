'use strict'

const routes = require('express').Router()
const path = require('path')
const ejs = require('ejs')

routes.get('/', (req, res) => {
    res.render('homepage')
})

// routes.get('/student', (req, res) => {
//     res.render('student')
// })
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
