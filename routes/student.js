var express = require('express')
var app = express()
var models = require('../models')

app.get('/students', function(req,res){
    models.Student.findAll()
    .then(students => {
        res.render('student.ejs',{students: students})
    })
})

app.get('/students/add', function(req, res){
    res.render('new_student.ejs')
})

app.post('/students', function(req, res){
    models.Student.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    })
    .then(function(){
        res.redirect('/students')
    })
    .catch(function(){
        res.send(err)
    })

})

app.get('/student/edit/:id', function(req,res){
    models.Student.findById(req.params.id)
    .then(student=>{
        res.render('student_edit.ejs',{student:student})
    })
})

app.post('/student/edit/:id',function(req,res){
    models.Student.update({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email
    },{
        where : {id:req.params.id}
    })
    .then(student=>{
        res.redirect('/students')        
    })
    .catch(err=>{
        res.send(err.message)
    })
})

app.get('/student/delete/:id', function(req,res){
    app.get('/student/delete/:id',function(req,res){
        Student.destroy({
            where:{id:req.params.id}
        })
        .then(student=>{
            res.redirect('/students')
        })
        .catch(err=>{
            console.log(err.message);
        })
    })
})

module.exports = app