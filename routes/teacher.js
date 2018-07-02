var express = require('express')
var app = express()
var models = require('../models')

app.get('/teacher', function(req,res){
    models.Teacher.findAll()
    .then(teachers => {
        res.render('teachers.ejs', {teachers: teachers})
    })
})

module.exports = app