'use strict'

const express = require("express")
const model = require("../models")
var Subject = model.Subject
const routes = express.Router()


routes.get("/subject",function(req,res){
    Subject.findAll()
    .then(function(allData){
        res.render("dataSubject",{allData : allData})
    })
    .catch(function(err){
        console.log(err)
    })
})


module.exports = routes