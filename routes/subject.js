const router     = require('express').Router();
const Controller = require('../controller/subject')

router.get('/subject', (req, res) => {
  Controller.findAll()
    .then (dataSubjects => {
      res.render('./subject/data', {dataSubjects})
    })
    .catch(err => {
      console.log(err)
    })
})

router.get('/subject/add', (req, res) => {
  res.render('./subject/add')
})

router.post('/subject/add', (req, res) => {
  Controller.add (req.body)
    .then(() => {
      Controller.findAll()
        .then(dataSubjects => {
          res.render("./subject/add", {dataSubjects})
        })
        .catch(err => {
          console.log(err)
        })
    })
    .catch(err => {
      console.log(err)
    })
})

router.get('/subject/edit/:id', (req, res) => {
  Controller.findById(req.params.id)
    .then(editSubject => {
      res.render('./subject/edit', {editSubject})
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/subject/edit/:id', (req, res) => {
  Controller.update(req.params.id, req.body)
    .then(() => {
      Controller.findAll()
        .then(dataSubjects => {
          res.render('./subject/data', {dataSubjects})
        })
        .catch(err => {
          console.log(err)
        })
    })
    .catch(err => {
      console.log(err)
    })
})

router.get('/subject/delete/:id', (req, res) => {
  Controller.findById(req.params.id)
    .then(deleteSubject => {
      res.render('./subject/delete', {deleteSubject})
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/subject/delete/:id', (req, res) => {
  Controller.delete(req.params.id)
    .then(() => {
      Controller.findAll()
        .then(dataSubjects => {
          res.render('./subject/data', {dataSubjects})
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