const app = require('express')()
const routes = require('./routes')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', routes)

app.listen(3000, () => {
  console.log('listening on port 3000')
})