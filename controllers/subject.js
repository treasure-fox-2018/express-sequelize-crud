const model = require('../models');

class Controller {
  static findAll () {
    return model.Subject.findAll()
  }

  static add (parameter) {
    return model.Subject.create({
      subject_name : parameter.subject_name
    })
  }

  static findById (id) {
    return model.Subject.findById(id)
  }

  static update(idData, dataUpdate) {
    return model.Subject.update({
      subject_name : dataUpdate.subject_name,
    },
    {
      where : {
        id : idData,
      }
    })
  }

  static delete (idData) {
    return model.Subject.destroy ({
      where : {
        id : idData
      }
    })
  }
}

module.exports = Controller;