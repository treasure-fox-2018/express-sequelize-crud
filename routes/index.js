const routes = require('express').Router();
const models = require('../models')

routes.get('/', (req, res) => {
  res.render("home",{title:'Welcome to our home page!',links:'please click the desired link below:'})
})

routes.get('/student', (req, res) =>{
  models.Student.findAll()
  .then(function(students){
    res.render("student",{title:'Students Data', links:'links:', students: students})
  })
})

routes.get('/student/add', (req, res) =>{
  res.render("student-add",{title:'Student Form', links:'links:'})
})

routes.post('/student', (req, res) =>{
  // console.log(req.body);
  models.Student.create({first_name: req.body.firstname, last_name: req.body.lastname, email: req.body.email})
  .then(function(student){
    res.redirect('/student')
  })
})

routes.get('/student/edit/:id', (req, res) =>{
  models.Student.findById(req.params.id)
  .then(function(student){
    console.log(student);
    res.render("student-edit",{title:'Student Form', links:'links:', student: student})
  })
})

routes.post('/student/edit/:id', (req, res) =>{
  models.Student.update({first_name: req.body.firstname, last_name: req.body.lastname, email: req.body.email},
    {where: {id: req.params.id}})
  .then(function(student){
    res.redirect('/student')
  })
})

routes.get('/student/delete/:id', (req, res) =>{
  models.Student.destroy({where:{id: req.params.id}})
  .then(function(student){
    res.redirect('/student')
  })
})
//
routes.get('/teacher', (req, res) =>{
  models.Teacher.findAll()
  .then(function(teachers){
    res.render("teacher",{title:'Teachers Data', links:'links:', teachers: teachers})
  })
})

routes.get('/teacher/add', (req, res) =>{
  res.render("teacher-add",{title:'Teacher Form', links:'links:'})
})

routes.post('/teacher', (req, res) =>{
  // console.log(req.body);
  models.Teacher.create({first_name: req.body.firstname, last_name: req.body.lastname, email: req.body.email})
  .then(function(teacher){
    res.redirect('/teacher')
  })
})

routes.get('/teacher/edit/:id', (req, res) =>{
  models.Teacher.findById(req.params.id)
  .then(function(teacher){
    console.log(teacher);
    res.render("teacher-edit",{title:'Teacher Form', links:'links:', teacher: teacher})
  })
})

routes.post('/teacher/edit/:id', (req, res) =>{
  models.Teacher.update({first_name: req.body.firstname, last_name: req.body.lastname, email: req.body.email},
    {where: {id: req.params.id}})
  .then(function(teacher){
    res.redirect('/teacher')
  })
})

routes.get('/teacher/delete/:id', (req, res) =>{
  models.Teacher.destroy({where:{id: req.params.id}})
  .then(function(teacher){
    res.redirect('/teacher')
  })
})
//
routes.get('/subject', (req, res) =>{
  models.Subject.findAll()
  .then(function(subjects){
    res.render("subject",{title:'Subjects Data', links:'links:', subjects: subjects})
  })
})

routes.get('/subject/add', (req, res) =>{
  res.render("subject-add",{title:'Subject Form', links:'links:'})
})

routes.post('/subject', (req, res) =>{
  // console.log(req.body);
  models.Subject.create({name: req.body.subjectname})
  .then(function(subject){
    res.redirect('/subject')
  })
})

routes.get('/subject/edit/:id', (req, res) =>{
  models.Subject.findById(req.params.id)
  .then(function(subject){
    console.log(subject);
    res.render("subject-edit",{title:'Subject Form', links:'links:', subject: subject})
  })
})

routes.post('/subject/edit/:id', (req, res) =>{
  models.Subject.update({name: req.body.subjectname},
    {where: {id: req.params.id}})
  .then(function(subject){
    res.redirect('/subject')
  })
})

routes.get('/subject/delete/:id', (req, res) =>{
  models.Subject.destroy({where:{id: req.params.id}})
  .then(function(subject){
    res.redirect('/subject')
  })
})

routes.get('/')



module.exports = routes;
