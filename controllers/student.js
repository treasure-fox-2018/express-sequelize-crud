const model = require('../models');

class Controller {
  static findAll () {
    return model.Student.findAll()
  }

  static add (parameter) {
    return model.Student.create({
      first_name: parameter.first_name,
      last_name: parameter.last_name,
      gender: parameter.gender,
      birthday: parameter.birthday,
      email: parameter.email,
      phone: parameter.phone
    })
  }

  static findById (id) {
    return model.Student.findById(id)
  }

  static delete (idData) {
    return model.Student.destroy ({
      where : {
        id : idData
      }
    })
  }
}

module.exports = Controller;