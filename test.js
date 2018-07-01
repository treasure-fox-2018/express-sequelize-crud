var model = require('./models')
var Teacher = model.Teacher

Teacher.findAll()
.then(teachers=>{
    console.log(teachers);
    
})
.catch(err=>{
    console.log(err.message);
    
})