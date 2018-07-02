'use strict'
const express = require('express');
const app = express();


var bodyParser = require('body-parser');
const routes = require('./routes/index');
const path = require('path')
var port = process.env.PORT || 3000;



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname, 'views'));


app.use('/', routes);
// app.use('/students',routes)


app.listen(port, () => {

    console.log(`server is connecting to port ${port}....`)
})

module.exports = app