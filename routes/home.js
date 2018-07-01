const express = require('express');
const home = express.Router();

//Connected to Routes
home.get('/', (request, response) => {
  response.render('home')
})

module.exports = home;