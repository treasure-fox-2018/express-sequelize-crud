const model = require('./models')

class Controller {
    static getDataTeacher(){
        return model.Teacher.findAll({raw:true})
    }

    static addStudent(data_student){
        return model.Student.create({
            first_name: data_student.first_name,
            last_name: data_student.last_name,
            email: data_student.email
        })
    }
}

module.exports = Controller