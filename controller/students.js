const models = require('../models');
const Sequelize = require('Sequelize');
const Op = Sequelize.Op;

class studentsController {
  static showAllData() {
    return models.Student.findAll({
      order: [
        ["id", "ASC"]
      ]
    });
  }

  static addStudent(first_name, last_name, email) {
    return models.Student.create({
      first_name: first_name,
      last_name: last_name,
      email: email,
    });
  }

  static deleteStudent(first_name) {
    return models.Student.destroy({
      where: {
        first_name: first_name,
      }
    });
  }

  static editStudent(id, first_name, last_name, email) {
    return (
      models.Student.findById(Number(id)).then((data) => {
        if (first_name === null) {
          first_name = data.first_name
        }
        if (last_name === null) {
          last_name = data.last_name
        }
        if (email === null) {
          last_name = data.last_name
        }
        models.Student.update({
          first_name: first_name,
          last_name: last_name,
          email: email
        }, {
          where: {
            id: `${id}`
          }
        })
      })
    )
  }
}

module.exports = studentsController;
