'use strict'

const express = require('express');
const app = express();
const ejs = require('ejs')

const routes = require('./routes/home');
const teachers = require('./routes/teacher');
const subjects = require('./routes/subject');
const students = require('./routes/student');

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));

app.use(routes);
app.use(teachers);
// app.use(subjects);
// app.use(students);

var server = app.listen(3000, () => {
  console.log('listening on port', server.address().port);
})