'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
  };
  return Teacher;
};
