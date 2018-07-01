const router     = require('express').Router();
const Controller = require('../controller/subject')

router.get('/subjects', (req, res) => {
  Controller.findAll()
    .then (dataSubjects => {
      res.render('./subject/index', {dataSubjects})
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/subjects/add', (req, res) => {
  res.render('./subject/add')
})

router.post('/subjects/add', (req, res) => {
  Controller.add (req.body)
    .then(() => {
      res.redirect('/subjects')
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/subjects/edit/:id', (req, res) => {
  Controller.findById(req.params.id)
    .then(editSubject => {
      res.render('./subject/edit', {editSubject})
    })
    .catch(err => {
      res.send(err)
    })
})

router.post('/subjects/edit/:id', (req, res) => {
  Controller.update(req.params.id, req.body)
    .then(() => {
      res.redirect('/subjects')
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/subjects/delete/:id', (req, res) => {
  Controller.delete(req.params.id)
    .then(deleteSubject => {
      res.redirect('/subjects')
    })
    .catch(err => {
      res.send(err)
    })
})

module.exports = router