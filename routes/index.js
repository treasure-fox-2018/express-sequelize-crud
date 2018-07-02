const routes = require('express').Router()

const ejs = require('ejs')
const models = require('../models')



routes.get('/', (Request, Response) => {
    Response.render('index')
})

routes.get('/students', (req, res) => {

    models.Student.findAll()

        .then(data => {
            res.render('studentData', { Students: data })
        })
})

routes.get('/students/add', (req, res) => {
    res.render('studentAdd')
})

routes.post('/students/add', (req, res) => {
    models.Student.create(req.body)

        // console.log(req.body)

        .then(student => {
            res.redirect('/students')
        })
        .catch(err => {
            res.redirect('/students', { show: err })
        })
})




routes.get('/students/delete/:id', (req, res) => {
    models.Student.destroy({

        where: { id: req.params.id }

    })
        .then(student => {
            res.redirect('/students')
        })
        .catch(err => {
            res.redirect('/students', { show: err })
        })
})

routes.post('/students/edit/:id', function (req, res) {
    models.Teacher.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,

        where: { id: req.params.id }

    })
        .then(function (teacher) {
            res.redirect('/students')
        })
        .catch(function (err) {
            res.send(err)

        })

})


module.exports = routes;
