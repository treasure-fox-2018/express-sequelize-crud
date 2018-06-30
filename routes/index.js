const express = require('express')
const router = express.Router()
const model = require('../models')

router.get('/', function(req, res){
    res.send('Ayyeeyy!')
})

router.get('/students', function(req, res){
	model.Student.findAll({
		order: [['id', 'ASC']]
	})
	.then(studentData => {
		res.render('student/students', {studentData : studentData})
	})
	.catch(err => {
		res.send(err)
	})
})

router.get('/students/add', function(req, res){
    res.render('student/addStudent')
})

router.post('/students/add', function(req, res){
    model.Student.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
        email: req.body.email,
        createdAt: new Date(),
        updatedAt: new Date()
	})
	.then(newStudent => {
		res.redirect('/students')
	})
	.catch(err => {
		res.send(err)
	})
})

router.get('/students/edit/:id', function(req, res){
	let id = req.params.id
	model.Student.findById(id)
	.then(editStudent =>{
		res.render("student/editStudent", {editStudent:editStudent})
    })
    .catch(err => {
		res.send(err)
	})
})

router.post('/students/edit/:id', function(req, res){
	model.Student.update({
	    firstName:req.body.firstName,
	    lastName:req.body.lastName,
	    email:req.body.email
	    },{
	     where:{
	     id:req.params.id
	    }
    })
	.then(() =>{
		res.redirect("/students")
	})
	.catch(err => {
		res.send(err)
	})
})

router.get('/students/delete/:id', function(req, res){
	var id = req.params.id
	model.Student.destroy({
		where: {id}
	})
	.then(function(){
		res.redirect('/students')
	})
	.catch(err => {
		res.send(err)
	})
})

// TEACHER

router.get('/teachers', function(req, res){
	model.Teacher.findAll({
		order: [['id', 'ASC']]
	})
	.then(teacherData => {
		res.render('teacher/teachers', {teacherData : teacherData})
	})
	.catch(err => {
		res.send(err)
	})
})

router.get('/teachers/add', function(req, res){
    res.render('teacher/addTeacher')
})

router.post('/teachers/add', function(req, res){
    model.Teacher.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
        email: req.body.email,
        createdAt: new Date(),
        updatedAt: new Date()
	})
	.then(newTeacher => {
		res.redirect('/teachers')
	})
	.catch(err => {
		res.send(err)
	})
})

router.get('/teachers/edit/:id', function(req, res){
	let id = req.params.id
	model.Teacher.findById(id)
	.then(editTeacher =>{
		res.render("teacher/editTeacher", {editTeacher:editTeacher})
    })
    .catch(err => {
		res.send(err)
	})
})

router.post('/teachers/edit/:id', function(req, res){
	model.Teacher.update({
	    firstName:req.body.firstName,
	    lastName:req.body.lastName,
	    email:req.body.email
	    },{
	     where:{
	     id:req.params.id
	    }
    })
	.then(() =>{
		res.redirect("/teachers")
	})
	.catch(err => {
		res.send(err)
	})
})

router.get('/teachers/delete/:id', function(req, res){
	var id = req.params.id
	model.Teacher.destroy({
		where: {id}
	})
	.then(function(){
		res.redirect('/teachers')
	})
	.catch(err => {
		res.send(err)
	})
})


// SUBJECT

router.get('/subjects', function(req, res){
	model.Subject.findAll({
		order: [['id', 'ASC']]
	})
	.then(subjectData => {
		res.render('subject/subjects', {subjectData : subjectData})
	})
	.catch(err => {
		res.send(err)
	})
})

router.get('/subjects/add', function(req, res){
    res.render('subject/addSubject')
})

router.post('/subjects/add', function(req, res){
    model.Subject.create({
		subjectName: req.body.subjectName,
        createdAt: new Date(),
        updatedAt: new Date()
	})
	.then(newSubject => {
		res.redirect('/subjects')
	})
	.catch(err => {
		res.send(err)
	})
})

router.get('/subjects/edit/:id', function(req, res){
	let id = req.params.id
	model.Subject.findById(id)
	.then(editSubject =>{
		res.render("subject/editSubject", {editSubject:editSubject})
    })
    .catch(err => {
		res.send(err)
	})
})

router.post('/subjects/edit/:id', function(req, res){
	model.Subject.update({
	subjectName:req.body.subjectName,
	    },{
	     where:{
	     id:req.params.id
	    }
    })
	.then(() =>{
		res.redirect("/subjects")
	})
	.catch(err => {
		res.send(err)
	})
})

router.get('/subjects/delete/:id', function(req, res){
	var id = req.params.id
	model.Subject.destroy({
		where: {id}
	})
	.then(function(){
		res.redirect('/subjects')
	})
	.catch(err => {
		res.send(err)
	})
})
module.exports = router