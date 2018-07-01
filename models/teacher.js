'use strict';
module.exports = (sequelize, DataTypes) => {
  var teacher = sequelize.define('teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  teacher.associate = function(models) {
    // associations can be defined here
  };
  return teacher;
};
