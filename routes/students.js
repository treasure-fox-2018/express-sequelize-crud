const app = require('express').Router();
const ejs = require('ejs');
const controller = require('../controller/students');

app.get('/student', (req, res) => {
  controller.showAllData()
    .then(data => {
      res.render('../views/student-dashboard', {
        data
      })
    })
    .catch(err => {
      console.log(err);
    })
  // res.end();
})

app.get("/student/add", function(req, res) {
  let input = req.body;
  res.render('../views/student-page', {
    Form: "Student Registration",
    Message: "Enter Information Below"
  })
  // controller.addStudent(input.first_name, input.last_name, input.email)
  // .then(data => {
  //   res.render('../views/student-dashboard', {data})
  // })
  // .catch(err => {
  //   console.log(err);
  // })
  // // res.render("../views/student-dashboard.ejs", {Username: String(info.username), Password: String(info.psw)})
  // res.end();
})

app.post("/student/add", function(req, res) {
  let input = req.body;
  controller.addStudent(input.first_name, input.last_name, input.email)
  //   .then(data => {
  //     res.render('../views/student-dashboard', {
  //       data
  //     })
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // // res.render("../views/student-dashboard.ejs", {Username: String(info.username), Password: String(info.psw)})
  res.redirect('/student')
})

module.exports = app;
