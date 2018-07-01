const model = require('../models');

class Controller {
  static findAll() {
    return model.Teacher.findAll()
  }

  static add(parameter) {
    return model.Teacher.create({
      first_name: parameter.first_name,
      last_name: parameter.last_name,
      email: parameter.email
    })
  }

  static findById(id) {
    return model.Teacher.findById(id)
  }

  static update(idData, dataUpdate) {
    return model.Teacher.update({
      first_name : dataUpdate.first_name,
      last_name : dataUpdate.last_name,
      email : dataUpdate.email
    },
    {
      where : {
        id : idData,
      }
    })
  }

  static delete (idData) {
    return model.Teacher.destroy ({
      where : {
        id : idData
      }
    })
  }
}

module.exports = Controller;