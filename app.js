const app = require('express')();
const routes = require('./routes');
const ejs = require('ejs');
const bodyParser = require('body-parser');

app.set('view engine','ejs')


app.listen(3000,()=>{
    console.log('App listening on port 3000')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/',routes)