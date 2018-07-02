const routesstudents = require('express').Router();
const models = require('../models');
const Students = models.Student;

routesstudents.get('/students', (req, res) => {
    // res.send('yay tudents')
    Students.findAll({
        order: [['id', 'ASC']]
    })
    .then(studentsData => {
        res.render('students.ejs', {title: "Students data", studentsData: studentsData})
    })
    .catch(err => {
        res.send(err)
    })
})

routesstudents.get('/students/add', (req, res) => {
    res.render('studentadd.ejs', {title: 'Student Form'})
})
routesstudents.post('/students/add', (req, res) => {
    
    Students.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    .then(studentsData => {
        res.redirect('/students')
    })
    .catch(err => {
        res.render(err)
    })
})

routesstudents.get('/students/edit/:id', (req, res) => {
    Students.findById(req.params.id)
    .then(editStudent => {
        res.render('studentedit.ejs', {title: 'Edit Student',
    editStudent:editStudent})
    })
})

routesstudents.post('/students/edit/:id', (req, res) => {
    Students.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email}, {where: {id: req.params.id}
    })
    .then(() => {
        res.redirect('/students')
    })
    .catch(err => {
        res.send(err)
    })
})

routesstudents.get('/students/delete/:id', (req, res) => {
    Students.destroy({where: {id: req.params.id}
    })
    .then(() => {
        res.redirect('/students')
    })
    .catch(err => {
        res.send(err)
    })
})


module.exports = routesstudents;