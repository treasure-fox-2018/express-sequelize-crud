const express = require('express')
const router = express.Router()
const models = require('../models'),
  {
    Student
  } = models;



let student = null;
let idstudent = null;
router.get('/', (req, res) => {
  Student.findAll().then(dataStudents => {
      res.render('students', {
        dataStudents
      });
    })
    .catch(err => {
      console.log(err.message);
    });
});



router.get('/add', (req, res) => {
  res.render('student_add', {
    errors: null
  });
});

router.post('/add', (req, res) => {
  student = req.body;
  Student.create(student).then(() => {
    res.redirect('/students');
  }).catch(err => {
    const errors = err.errors.map(error => error.message);
    res.render('student_add', {
      errors
    });
    console.log(err);
  });
});



router.get('/edit/:id', (req, res) => {
  idstudent = req.params.id;
  Student.findById(idstudent).then(student => {
    res.render('student_edit', {
      student,
      errors: null
    });
  }).catch(err => {
    console.log(err);
  });
});


router.post('/edit/:id', (req, res) => {
  idstudent = req.params.id;
  student = req.body;
  Student.update(student, {
    where: {
      id: idstudent
    }
  }).then(() => {
    res.redirect('/students');
  }).catch(err => {
    const errors = err.errors.map(error => error.message);
    Student.findById(idstudent).then(student => {
      res.render('student_edit', {
        student,
        errors
      });
    });
    console.log(err);
  });
});




router.get('/delete/:id', (req, res) => {
  idstudent = req.params.id;
  Student.destroy({
    where: {
      id: idstudent
    }
  }).then(() => {
    res.redirect('/students');
  });
});

module.exports = router;
