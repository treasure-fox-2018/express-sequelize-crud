const app = require('express').Router();
const ejs = require('ejs');
const controller = require('../controller/teachers');

app.get('/teacher', (req, res) => {
  controller.showAllData()
    .then(teacherData => {
      res.render('../views/teacher-dashboard', {
        data: teacherData
      })
    })
    .catch(err => {
      res.send(err);
    })
  // res.end();
})

app.get("/teacher/add", function(req, res) {
  let input = req.body;
  res.render('../views/teacher-page', {
    Form: "Teacher Registration",
    Message: "Enter Information Below"
  })
})

app.post("/teacher/add", function(req, res) {
  let input = req.body;
  controller.addTeacher(input.first_name, input.last_name, input.email)
  .then(() => {
    res.redirect('/teacher')
  })
  .catch(err => {
    res.send(err);
  })
})

app.get("/teacher/edit/:id", function(req, res) {
  res.render('../views/teacher-edit-page', {
    id: req.params.id,
    Form: "Teacher Edit",
    Message: "Leave unchanged information form blank"
  })
})

app.post("/teacher/edit/:id", function(req, res) {
  let input = req.body;
  controller.editTeacher(req.params.id, input.first_name, input.last_name, input.email)
  .then(() => {
    res.redirect('/teacher');
  })
  .catch((err) => {
    res.send(err)
  })
})

app.get("/teacher/delete/:id", function(req, res) {
  res.render('../views/teacher-delete-page', {
    id: req.params.id,
    Form: "Teacher Removal",
    Message: "Requires Confirmation"
  })
})

app.post("/teacher/delete/:id", function(req, res) {
  let input = req.body;
  if (input.confirm === '') {
    controller.deleteTeacher(req.params.id)
  }
  res.redirect('/teacher')
})

module.exports = app;
