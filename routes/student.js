var express = require('express')
var app = express()
var model = require('../models')
var Student = model.Student


app.get('/student',function(req,res){
    Student.findAll()
    .then(students=>{
        res.render('student_table',{student:students})
    })
})

app.get('/student/add',function(req,res){
    res.render('student_form')
})

app.post('/student/add',function(req,res){
    Student.create({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email
    })
    .then(student=>{
        res.redirect('/student')
    })
    .catch(err=>{
        console.log(err.message)
    })
})

app.get('/student/edit/:id',function(req,res){
    Student.findById(req.params.id)
    .then(student=>{
        res.render('student_edit',{student:student})
    })
})

app.post('/student/edit/:id',function(req,res){
    Student.update({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email
    },{
        where : {id:req.params.id}
    })
    .then(student=>{
        res.redirect('/student')        
    })
    .catch(err=>{
        console.log(err.message);
    })
})

app.get('/student/delete/:id',function(req,res){
    Student.destroy({
        where:{id:req.params.id}
    })
    .then(student=>{
        res.redirect('/student')
    })
    .catch(err=>{
        console.log(err.message);
    })
})


module.exports = app