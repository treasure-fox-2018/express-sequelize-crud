'use strict'

const express = require("express")
const model = require("../models")
var Teacher = model.Teacher
const routes = express.Router()

routes.get("/teacher/add",function(req,res){
    res.render("teacher_add",{err : null})
})

routes.post("/teacher/add",function(req,res){
    Teacher.create({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email
    })
    .then(function(teacher){
        res.redirect("/teacher/data")
    })
    .catch(function(err){
        // res.render("teacher_add",{teacher_add,err :err.message })
        // res.send("email eror")
        res.render("teacher_add",{err :err.message})
        // console.log(err)
    })
})

routes.get("/teacher/data",function(req,res){
    Teacher.findAll()
    .then(function(allData){
        // console.log(allData)
        res.render("teacher_data",{allData : allData})
    })
})

routes.get("/teacher/:id/edit",function(req,res){
    Teacher.findById(req.params.id)
    .then(function(allData){
        res.render("edit_teacher",{allData : allData,err : null})
    })
})

routes.post("/teacher/:id/edit",function(req,res){
    Teacher.update({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email
    },{
        where : { id : req.params.id}
    })
    .then(function(){
        res.redirect("/teacher/data")
    })
    .catch(function(err){
        Teacher.findById(req.params.id)
        .then(allData=>{
            res.render("edit_teacher",{allData:allData,err : err.message})
            
        })
    })

})

routes.get("/teacher/:id/delete",function(req,res){
    Teacher.destroy({
        where : {
            id : req.params.id
        }
    })
    .then(function(){
        res.redirect("/teacher/data")
    })
    
})

module.exports = routes