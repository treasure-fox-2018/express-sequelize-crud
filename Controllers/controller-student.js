'use strict'

const Model = require('../models/')
const Students = Model.Student

class ControllerStudent {
    static addStudent(studentData) {
        return Students.create({
            first_name: studentData.first_name,
            last_name: studentData.last_name,
        })
    }

    static showStudents() {
        return Students.findAll()
    }

    static deleteStudent(id) {
        return Students.destroy({where: {id: id}})
    }

}

module.exports = ControllerStudent
