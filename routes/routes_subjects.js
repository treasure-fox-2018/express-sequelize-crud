const express = require('express')
const router = express.Router()
const model = require('../models')

const Model = model.Subject
const direct = '/subjects'
const routes = 'subjects'
const attr = ['id','subject_name']

router.get('/', function(req,res){
    Model
    .findAll({attributes:attr, raw:true})
    .then(function(records){
        res.render("view", {records, title:routes})  
    })
    .catch(function(err){
        res.send(err.errors)
    })
})

router.get('/add', function(req,res){
    res.render("input", {title:routes})
})

router.post('/add', function(req,res){
    
    Model
    .create({
        subject_name : req.body.subject_name,
        createAt : new Date(),
        updatedAt : new Date(),
    })
    .then(function(record){
        console.log(`success input ${record.toJSON()}`)
        res.redirect(direct)
    })
    
})

router.get('/edit/:id', function(req,res, next){
    
    Model
    .findById(req.params.id)
    .then(function(record){
        if(record){
            res.render("edit",{record,title:routes})
        }else{
            next("id is not defined")
        }
    })
    .catch(function(err){
        res.send(err.errors)
    })
})

router.post('/edit/:id', function(req,res){
    
    Model
    .update({
        subject_name:req.body.subject_name,
    },{
        where:{id:req.params.id}
    })
    .then(function(record){
        res.redirect(direct)
    })
    .catch(function(err){
        res.send(err.errors)
    })
})

router.get("/delete/:id", function(req, res){
    Model
    .destroy({
        where:{id:req.params.id},
    })
    .then(function(record){
        res.redirect(direct)
    })
    .catch(function(err){
        res.send(err.errors)
    })
})


module.exports = router