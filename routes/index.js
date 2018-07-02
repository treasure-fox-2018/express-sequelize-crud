const routes = require ('express').Router();
const student = require('../controllers/student');
const teacher = require('../controllers/teacher');


routes.get('/', (req, res) => {
  res.render('home')
})

routes.get('/students/', (req, res) => {
  student.showAll()
  .then( students => {
    res.render('students-data', {students})
  })
  .catch( err => {
    console.log(err)
  })
})

routes.get('/students/add', (req, res) => {
  res.render('students-add')
})

routes.post('/students/add', (req, res) => {
  student.add(req.body)
  .then(()=> {
    res.send('Data added!')
  })
  .catch(err => {
    console.log(err)
  })
})

routes.get('/students/edit/:id', (req, res) => {
  student.findById(req.params.id)
  .then((student) => {
    res.render('student-edit', {student})
  })
  .catch(err => {
    console.log(err)
  })
})

routes.post('/students/edit/:id', (req, res) => {
  student.update(req.body, req.params.id)
  .then(() => {
    res.send('Data updated!')
  })
  .catch(err => {
    console.log(err)
  })
})

routes.get('/students/delete/:id', (req, res)=> {
  student.delete(req.params.id)
  .then(()=> {
    res.send('Data deleted!')
  })
  .catch(err => {
    console.log(err)
  })
})



module.exports = routes;