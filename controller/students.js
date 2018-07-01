const models = require('../models');
const Sequelize = require('Sequelize');
const Op = Sequelize.Op;

class studentsController {
  static showAllData() {
    return models.Student.findAll({
      order: [["id", "ASC"]]
    });
  }

  static addStudent
}

module.exports = studentsController;
