'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
    // Teacher.hasOne(models.Subject)
  };
  return Teacher;
};
