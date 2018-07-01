const router     = require('express').Router();
const Controller = require('../controller/student')

router.get('/student', (req, res) => {
  Controller.findAll()
    .then (dataStudents => {
      console.log(dataStudents)
      // res.render('./student/data', {dataStudents})
      res.send({dataStudents})
    })
    .catch(err => {
      console.log(err)
    })
})

router.get('/student/add', (req, res) => {
  res.render('./student/add')
})

router.post('/student/add', (req, res) => {
  Controller.add (req.body)
    .then(() => {
      Controller.findAll()
        .then(dataStudents => {
          res.render("./student/add", {dataStudents})
        })
        .catch(err => {
          console.log(err)
        })
    })
    .catch(err => {
      console.log(err)
    })
})

router.get('/student/edit/:id', (req, res) => {
  Controller.findById(req.params.id)
    .then(editStudent => {
      res.render('./student/edit', {editStudent})
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/student/edit/:id', (req, res) => {
  Controller.update(req.params.id, req.body)
    .then(() => {
      Controller.findAll()
        .then(dataStudents => {
          res.render('./student/data', {dataStudents})
        })
        .catch(err => {
          console.log(err)
        })
    })
    .catch(err => {
      console.log(err)
    })
})

router.get('/student/delete/:id', (req, res) => {
  Controller.findById(req.params.id)
    .then(deleteStudent => {
      res.render('./student/delete', {deleteStudent})
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/student/delete/:id', (req, res) => {
  Controller.delete(req.params.id)
    .then(() => {
      Controller.findAll()
        .then(dataStudents => {
          res.render('./student/data', {dataStudents})
        })
        .catch(err => {
          console.log(err)
        })
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router