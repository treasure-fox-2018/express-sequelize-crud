'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subject_name: {
      type : DataTypes.STRING,
      validate : {
        isUnique(data,cb){
          Subject.findAll({where : {subject_name : data}})
          .then(function(dataSubject){
            if(dataSubject.length > 0){
              cb("Subject sudah ada")
            }else{
              cb()
            }
          })
        }
      }
    }
  }, {});
  Subject.associate = function(models) {
    // associations can be defined here
  };
  return Subject;
};