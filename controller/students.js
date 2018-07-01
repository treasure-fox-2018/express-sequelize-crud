const models = require('../models');
const Sequelize = require('Sequelize');
const Op = Sequelize.Op;

class studentsController {
  static showAllData() {
    return models.Student.findAll({
      order: [["id", "ASC"]]
    });
  }

  static addStudent(first_name, last_name, email) {
    return models.Student.create({
      first_name: first_name,
      last_name: last_name,
      email: email ,
    });
  }
}

module.exports = studentsController;
