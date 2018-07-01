const routes = require('express').Router();
const models = require('../models');

// routes.use('./students',models)

routes.get('/',function(req,res){
    res.render('index',{homeTitle: "School Database", h1:"Welcome to School Database !!"})
})

routes.get('/students',function(req,res){
    models.Student
    .findAll({
        attributes:['id','first_name','last_name','email'],
        raw:true,
    })
    .then(function(student){
        // res.send(teacher)
        res.render('student',{student})
    }).catch(function(err){
        // res.send('Error read data teachers')
    })
})

routes.get('/students/add',function(req,res){
    res.render('studentAdd')
})

routes.post('/students/add',function(req,res){
    models.Student
    .create({
        first_name:req.body.firstname,
        last_name:req.body.lastname,
        email:req.body.email
    })
    .then(function(){
        res.redirect('/students')
    }).catch(function(err){

    })
})

routes.get('/students/edit/:id',function(req,res){
    models.Student
    .findById(req.params.id)
    .then(function(studentById){
        // res.send(studentById)
        res.render('studentEdit',{studentById})
    })
})

routes.post('/students/edit/:id',function(req,res){
    models.Student.update({
        first_name:req.body.firstname,
        last_name:req.body.lastname,
        email:req.body.email
    },{where:{id:req.params.id}})
    .then(function(){
        res.redirect('/students')
    }).catch(function(err){

    })
})

routes.get('/students/delete/:id',function(req,res){
    models.Student
    .destroy({where:{id:req.params.id}})
    .then(function(){
        res.redirect('/students')
    })
})


module.exports = routes

