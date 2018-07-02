const app = require('express')();
const routes = require('./routes');
const ejs = require('ejs')
const bodyParser = require('body-parser');

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// connect all routes
app.use('/', routes)

// turn on the server
app.listen (3000, () => {
  console.log('connected to server')
})