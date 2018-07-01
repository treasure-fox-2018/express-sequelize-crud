'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "first_name must be filled!"
        }
      }

    },
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "wrong email format!"
        },
        unik(emails, cb) {

          Student.findAll({
              where: {
                email: emails
              }
            })
            .then(x => {
              if (x.length > 0) {

                cb("email sudah ada!")

              } else {
                cb()
              }

            })

        }
      }
    }
  }, {});
  Student.associate = function (models) {
    // associations can be defined here
  };
  return Student;
};
