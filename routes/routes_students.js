const express = require('express')
const router = express.Router()
const model = require('../models')

const Model = model.Student
const direct = '/students'
const routes = 'students'
const attr = ['id','first_name', 'last_name', 'email']

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
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
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
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email : req.body.email,
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