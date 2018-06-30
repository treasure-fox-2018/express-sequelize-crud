'use strict'

const express = require("express")
const model = require("../models")
var Student = model.Student
const routes = express.Router()

routes.get("/student/add",function(req,res){
    res.render("student_add",{err : null})
})

routes.post("/student/add",function(req,res){
    Student.create({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email
    })
    .then(function(){
        res.redirect("/student/data")
    })
    .catch(function(err){
        res.render("student_add",{err : err.message})
    })
})

routes.get("/student/data",function(req,res){
    Student.findAll()
    .then(function(dataStudent){
        res.render("student_data",{dataStudent : dataStudent})
    })
})

routes.get("/student/:id/edit",function(req,res){
    Student.findById(req.params.id)
    .then(function(dataStudent){
        res.render("edit_student",{dataStudent : dataStudent,err : null})
    })
})

routes.post("/student/:id/edit",function(req,res){
    Student.update({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email
    },{
        where : { id : req.params.id}
    })
    .then(function(){
        res.redirect("/student/data")
    })
    .catch(function(err){
        Student.findById(req.params.id)
        .then(function(dataStudent){
            res.render("edit_student",{dataStudent : dataStudent,err : err.message})
        })
        
    })
})

routes.get("/student/:id/delete",function(req,res){
    Student.destroy({
        where : { id : req.params.id}
    })
    .then(function(){
        res.redirect("/student/data")
    })
})

module.exports = routes