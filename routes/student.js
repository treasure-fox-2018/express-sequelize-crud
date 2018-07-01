const express = require('express');
const student = express.Router();
const Controller = require('../controllers/student');

const ejs = require('ejs');

student.get('/student', (request, response) => {
  Controller.findAll()
    .then(dataStudents => {
      response.render('student', {
        dataStudent : dataStudents
      });
    })

    .catch(failed => {
      console.log(failed)  
    })
})

module.exports = student;