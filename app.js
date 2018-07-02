"use strict"
const routes = require('./routes/index');
const students = require('./routes/students');
const teachers = require('./routes/teachers');
const app = require('express')();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const express = require('express');
app.set("view engine", "ejs");


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));


app.use("/", routes);
app.use(students, teachers);


app.listen("3000", () => {
  console.log("server...");
});
