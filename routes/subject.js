var express = require('express')
var app = express()
var model = require('../models')
var Subject = model.Subject


app.get('/subject',function(req,res){
    Subject.findAll()
    .then(subjects=>{
        res.render('subject_table',{subject:subjects})
    })
})

app.get('/subject/add',function(req,res){
    res.render('subject_form')
})

app.post('/subject/add',function(req,res){
    Subject.create({
        subject_name:req.body.subject_name
    })
    .then(subject=>{
        res.redirect('/subject')
    })
    .catch(err=>{
        console.log(err.message)
    })
})

app.get('/subject/edit/:id',function(req,res){
    Subject.findById(req.params.id)
    .then(subject=>{
        res.render('subject_edit',{subject:subject})
    })
})

app.post('/subject/edit/:id',function(req,res){
    Subject.update({
        subject_name:req.body.subject_name
    },{
        where : {id:req.params.id}
    })
    .then(subject=>{
        res.redirect('/subject')
    })
    .catch(err=>{
        console.log(err.message);
    })
})

app.get('/subject/delete/:id',function(req,res){
    Subject.destroy({
        where:{id:req.params.id}
    })
    .then(subject=>{
        res.redirect('/subject')
    })
    .catch(err=>{
        console.log(err.message);
    })
})



module.exports = app