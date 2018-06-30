const router = require('express').Router()
const models = require('../models')
const Student = models.Student
const Teacher = models.Teacher
const Subject = models.Subject

router.get('/', (req, res) => {
  res.json({ status: 'Connected' })
})

router.get('/students', (req, res) => {
  Student.findAll({
    order: [
      ['id', 'ASC']
    ]})
    .then(students => {
      res.render('tableView', {
        category: 'student',
        data: students,
        err: null
      })
    })
    .catch(err => res.send(err.message))
})

router.get('/students/add', (req, res) => {
  let data = { first_name: '', last_name: '', email: ''}
  res.render('addView', {
    category: 'student',
    err: null,
    data: data
  })
})

router.post('/students/add', (req, res) => {
  let input = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  }
  Student.create(input)
    .then(() => res.redirect('/students'))
    .catch(error => {
      res.render('addView', {
        category: 'student',
        err: error.message,
        data: input
      })
    })
})

router.get('/students/edit/:id', (req, res) => {
  Student.findById(req.params.id)
    .then(student => {
      // res.send(student.toJSON())
      let data = {
        id: student.id,
        first_name: student.first_name,
        last_name: student.last_name,
        email: student.email
      }
      res.render('editView', {
        category: 'student',
        data: data,
        err: null
      })
    })
    .catch(err => res.send(err.message))
})

router.post('/students/edit/:id', (req, res) => {
  let data = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  }

  Student.update(data, {
    where: { id: req.params.id }
  }).then(() => res.redirect('/students'))
    .catch(error => {
      res.render('editView', {
        category: 'student',
        data: data,
        err: error.message
      })
    })
})

router.get('/teachers', (req, res) => {
  Teacher.findAll({
    order: [
      ['id', 'ASC']
    ]})
    .then(teachers => {
      res.render('tableView', {
        category: 'teacher',
        data: teachers,
        err: null
      })
    })
    .catch(err => res.send(err.message))
})

router.get('/teachers/add', (req, res) => {
  let data = { first_name: '', last_name: '', email: ''}
  res.render('addView', {
    category: 'teacher',
    err: null,
    data: data
  })
})

router.post('/teachers/add', (req, res) => {
  let input = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  }
  Teacher.create(input)
    .then(() => res.redirect('/teachers'))
    .catch(error => {
      res.render('addView', {
        category: 'teacher',
        err: error.message,
        data: input
      })
    })
})

router.get('/teachers/edit/:id', (req, res) => {
  Teacher.findById(req.params.id)
    .then(teacher => {
      // res.send(teacher.toJSON())
      let data = {
        id: teacher.id,
        first_name: teacher.first_name,
        last_name: teacher.last_name,
        email: teacher.email
      }
      res.render('editView', {
        category: 'teacher',
        data: data,
        err: null
      })
    })
    .catch(err => res.send(err.message))
})

router.post('/teachers/edit/:id', (req, res) => {
  let data = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  }

  Teacher.update(data, {
    where: { id: req.params.id }
  }).then(() => res.redirect('/teachers'))
    .catch(error => {
      res.render('editView', {
        category: 'teacher',
        data: data,
        err: error.message
      })
    })
})

module.exports = router