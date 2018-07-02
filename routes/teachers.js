const routesteachers = require('express').Router();
const models = require('../models');
const Teachers = models.Teacher;

routesteachers.get('/teachers', (req, res) => {
    // res.send('yay teachers')
    Teachers.findAll({
        order: [['id', 'ASC']]
    })
        .then(teachersData => {
            // res.send(teachersData)
            res.render('teachers.ejs', { title: "List of Teachers", teachersData: teachersData })
        })
        .catch(err => {
            res.send(err)
        })
})

routesteachers.get('/teachers/add', (req, res) => {
    res.render('teacheradd.ejs', { title: 'Teacher Form' })
})

routesteachers.post('/teachers/add', (req, res) => {
    Teachers.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        createdAt: new Date(),
        updatedAt: new Date()
    })
        .then(teachersData => {
            res.redirect('/teachers')
        })
        .catch(err => {
            res.render(err)
        })
})

routesteachers.get('/teachers/edit/:id', (req, res) => {
    Teachers.findById(req.params.id)
        .then(editTeacher => {
            res.render('teacheredit.ejs', {
                title: 'Edit Teacher',
                editTeacher: editTeacher
            })
        })
})

routesteachers.post('/teachers/edit/:id', (req, res) => {
    Teachers.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }, {
        where: { id: req.params.id }
        })
        .then(() => {
            res.redirect('/teachers')
        })
        .catch(err => {
            res.send(err)
        })
})

routesteachers.get('/teachers/delete/:id', (req, res) => {
    Teachers.destroy({ where: { id: req.params.id } })
        .then(() => {
            res.redirect('/teachers')
        })
        .catch(err => {
            res.send(err)
        })
})




module.exports = routesteachers;