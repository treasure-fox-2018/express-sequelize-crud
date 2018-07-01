const router     = require('express').Router();
const Controller = require('../controller/teacher')

router.get('/teacher', (req, res) => {
  Controller.findAll()
    .then (dataTeachers => {
      res.send({dataTeachers});
      // res.render('./teacher/data_teacher', {dataTeachers})
    })
    .catch(err => {
      console.log(err)
    })
})

router.get('/teacher/add', (req, res) => {
  res.render('./teacher/add')
})

router.post('/teacher/add', (req, res) => {
  Controller.add (req.body)
    .then(() => {
      Controller.findAll()
        .then(dataTeachers => {
          res.render("./teacher/add", {dataTeachers})
        })
        .catch(err => {
          console.log(err)
        })
    })
    .catch(err => {
      console.log(err)
    })
})

router.get('/teacher/edit/:id', (req, res) => {
  Controller.findById(req.params.id)
    .then(editTeacher => {
      res.render('./teacher/edit', {editTeacher})
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/teacher/edit/:id', (req, res) => {
  Controller.update(req.params.id, req.body)
    .then(() => {
      Controller.findAll()
        .then(dataTeachers => {
          res.render('./teacher/data', {dataTeachers})
        })
        .catch(err => {
          console.log(err)
        })
    })
    .catch(err => {
      console.log(err)
    })
})

router.get('/teacher/delete/:id', (req, res) => {
  Controller.findById(req.params.id)
    .then(deleteTeacher => {
      res.render('./teacher/delete', {deleteTeacher})
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/teacher/delete/:id', (req, res) => {
  Controller.delete(req.params.id)
    .then(() => {
      Controller.findAll()
        .then(dataTeachers => {
          res.render('./teacher/data', {dataTeachers})
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