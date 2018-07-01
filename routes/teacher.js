const express = require('express');
const teachers = express.Router();
const Controller = require('../controllers/teacher');


teachers.get('/teacher', (request, response) => {
  Controller.findAll()
    .then(dataTeachers => {
      response.render('teacher', {
        dataTeacher: dataTeachers
      });
    })

    .catch(failed => {
      console.log(failed)  
    })
})

teachers.get('/teacher/add', (request, response) => {
  response.render('addTeacher.ejs');
})

teachers.post('/teacher/add', (request, response) => {
  Controller.add(request.body)
  response.send('Data is successfully submited!')
})

// teachers.get('/teacher/edit/:id', (request, response) => {
//   Controller.findById(request.params.id)
//     .then (editTeacher => {
//       response.render('')
//     })
// })

module.exports = teachers;