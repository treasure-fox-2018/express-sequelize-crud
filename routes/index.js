const routes = require ('express').Router();
const student = require('../controllers/student');
const teacher = require('../controllers/teacher');


routes.get('/', (req, res) => {
  res.render('home')
})

routes.get('/students/', (req, res) => {
  student.showAll()
  .then( students => {
    res.render('students-data', {students: students})
  })
  .catch( err => {
    res.send(err.message)
  })
})

routes.get('/students/add', (req, res) => {
  res.render('students-add')
})

routes.post('/students/add', (req, res) => {
  let studentObj = {
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email
  }
  student.add(studentObj)
  .then(()=> {
    res.redirect('/students')
  })
  .catch(err => {
    res.send(err.message)
  })
})

routes.get('/students/edit/:id', (req, res) => {
  student.findById(req.params.id)
  .then((student) => {
    res.render('student-edit', {student: student})
  })
  .catch(err => {
    res.send(err.message)
  })
})


routes.post('/students/edit/:id', (req, res) => {
  let studentObj = {
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email
  }
  student.update(studentObj, req.params.id)
  .then(() => {
    res.redirect('/students')
  })
  .catch(err => {
    res.send(err.message)
  })
})

routes.get('/students/delete/:id', (req, res)=> {
  student.delete(req.params.id)
  .then(()=> {
    res.redirect('/students')
  })
  .catch(err => {
    res.send(err.message)
  })
})



module.exports = routes;