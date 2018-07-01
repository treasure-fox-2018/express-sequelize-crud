const router     = require('express').Router();
const Controller = require('../controller/teacher')

router.get('/teachers', (req, res) => {
  Controller.findAll()
    .then (dataTeachers => {
      // res.send({dataTeachers});
      res.render('./teacher/index', {dataTeachers})
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/teachers/add', (req, res) => {
  res.render('./teacher/add')
})

router.post('/teachers/add', (req, res) => {
  // console.log(req.body)
  Controller.add (req.body)
    .then(() => {
       res.redirect('/teachers')
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/teachers/edit/:id', (req, res) => {
  Controller.findById(req.params.id)
    .then(editTeacher => {
      res.render('./teacher/edit', {editTeacher})
    })
    .catch(err => {
      res.send(err)
    })
})

router.post('/teachers/edit/:id', (req, res) => {
  Controller.update(req.params.id, req.body)
    .then(() => {
      res.redirect('/teachers')
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/teachers/delete/:id', (req, res) => {
  Controller.delete(req.params.id)
    .then(deleteTeacher => {
      res.redirect('/teachers')
    })
    .catch(err => {
      res.send(err)
    })
})

module.exports = router