const routes = require('express').Router();
const Models = require('../models');

routes.get('/', (req, res) => {
    res.render('index.ejs')
})

routes.get('/students', (req, res) => {
    Models.Student.findAll({
        order: [['id', 'ASC']]
    })
    .then(studentdata => {
        res.render('students.ejs', {studentdata: studentdata})
    })
    .catch(err => {
        res.send(err)
    })
})

routes.get('/students/add', (req, res) => {
    res.render('addStudents.ejs')
})
routes.post('/students/add', (req, res) => {
    Models.Student.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    })
    .then(newStudent => {
        res.redirect('/students')
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = routes;