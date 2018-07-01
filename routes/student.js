const router     = require('express').Router();
const Controller = require('../controller/student')

router.get('/students', (req, res) => {
  Controller.findAll()
    .then (dataStudents => {
      res.render('./student/index', {dataStudents})
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/students/add', (req, res) => {
  res.render('./student/add')
})

router.post('/students/add', (req, res) => {
  Controller.add (req.body)
    .then(() => {
      res.redirect('/students')
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/students/edit/:id', (req, res) => {
  Controller.findById(req.params.id)
    .then(editStudent => {
      res.render('./student/edit', {editStudent})
    })
    .catch(err => {
      res.send(err)
    })
})

router.post('/students/edit/:id', (req, res) => {
  Controller.update(req.params.id, req.body)
    .then(() => {
      res.redirect('/students')
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/students/delete/:id', (req, res) => {
  Controller.delete(req.params.id)
    .then(deleteStudent => {
      res.redirect('/students')
    })
    .catch(err => {
      res.send(err)
    })
})

module.exports = router