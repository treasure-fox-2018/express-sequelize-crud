'use strict';
const fs = require('fs')
let csv = fs.readFileSync(__dirname + '/../teachers.csv', 'utf8').split('\n');
let teachers = []
for (let i = 1; i < csv.length; i++) {
  let data = csv[i].split(',')
  let obj = {
    first_name: data[0],
    last_name: data[1],
    email: data[2],
    createdAt: new Date(),
    updatedAt: new Date()
  }
  teachers.push(obj)
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers', teachers, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {})
  }
};
