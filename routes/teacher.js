var express = require('express')
var app = express()
var model = require('../models')
var Teacher = model.Teacher



app.get('/teacher',function(req,res){
    Teacher.findAll()
    .then(teachers=>{
        res.render('teacher_table',{teacher:teachers})
    })
})

app.get('/teacher/add',function(req,res){
    res.render('teacher_form')
})

app.post('/teacher/add',function(req,res){
    Teacher.create({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email
    })
    .then(teacher=>{
        res.redirect('/teacher')
    })
    .catch(err=>{
        console.log(err.message)
    })
})

app.get('/teacher/edit/:id',function(req,res){
    Teacher.findById(req.params.id)
    .then(teacher=>{
        res.render('teacher_edit',{teacher:teacher})
    })
})

app.post('/teacher/edit/:id',function(req,res){
    Teacher.update({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email
    },{
        where : {id:req.params.id}
    })
    .then(teacher=>{
        res.redirect('/teacher')
    })
    .catch(err=>{
        console.log(err.message);
    })
})

app.get('/teacher/delete/:id',function(req,res){
    Teacher.destroy({
        where:{id:req.params.id}
    })
    .then(teacher=>{
        res.redirect('/teacher')
    })
    .catch(err=>{
        console.log(err.message);
    })
})



module.exports = app