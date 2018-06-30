'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'please insert your first_name'
        }
      }
    },
    last_name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : "please insert your last_name"
        }
      }  
    },
    email: {
      type : DataTypes.STRING,
      validate : {
        isEmail : {
          args : true,
          msg : "invalid format email"
        },
        isUnique(value,cb){
          Student.findAll({where : {email : value}})
          .then(function(data){
            if(data.length > 0){
              cb("email has already taken")
            }else{
              cb()
            }
          })
        },
        notEmpty : {
          args : true,
          msg : "please insert your email"
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};