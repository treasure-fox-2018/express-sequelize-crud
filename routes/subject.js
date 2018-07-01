'use strict'

const express = require("express")
const model = require("../models")
var Subject = model.Subject
const routes = express.Router()


routes.get("/subject",function(req,res){
    Subject.findAll({
        order : [
            ["id","ASC"]
        ]
    })
    .then(function(allData){
        res.render("dataSubject",{allData : allData})
    })
    .catch(function(err){
        console.log(err)
    })
})

routes.get("/subject/add",function(req,res){
    res.render("subject_add",{err : null})
})

routes.post("/subject/add",function(req,res){
    Subject.create({
        subject_name : req.body.subject_name
    })
    .then(function(){
        res.redirect("/subject")
    })
    .catch(function(err){
        res.render("subject_add",{err : err.message})
    })
})

routes.get("/subject/:id/edit",function(req,res){
    Subject.findById(req.params.id)
    .then(function(dataSubject){
        res.render("edit_subject",{dataSubject : dataSubject,err : null})
    })
})

routes.post("/subject/:id/edit",function(req,res){
    Subject.update({
        subject_name : req.body.subject_name
    },{
        where : {id:req.params.id}
    })
    .then(function(){
        res.redirect("/subject")
    })
    .catch(function(err){
        Subject.findById(req.params.id)
        .then(function(dataSubject){
            res.render("edit_subject",{dataSubject : dataSubject,err : err.message})
        })
    })
})

routes.get("/subject/:id/delete",function(req,res){
    Subject.destroy({
        where : {id : req.params.id}
    })
    .then(function(){
        res.redirect("/subject")
    })
})



module.exports = routes