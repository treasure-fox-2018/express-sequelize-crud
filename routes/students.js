const app = require('express').Router();
const ejs = require('ejs');
const controller = require('../controller/students');

app.get('/student', (req, res) => {
  controller.showAllData()
    .then(data => {
      res.render('../views/student-dashboard', {data})
    })
    .catch(err => {
      console.log(err);
    })
})

// app.post("/student", function (req, res) {
//   let info = req.body;
//   // console.log(info);
//   res.render("../views/student-dashboard.ejs", {Username: String(info.username), Password: String(info.psw)})
//   res.end();
// })

module.exports = app;
