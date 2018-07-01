const Model = require("../models");

class Controller {
  static findAll () {
    return Model.Subject.findAll({
      order: [["id", "ASC"]]
    })
  }

  static add (newData) {
    return Model.Subject.create({
      subject_name: newData.subject_name
    })
  }

  static findById (id) {
    return Model.Subject.findById(id);
  }

  static update (id, updateData) {
    return Model.Subject.update(
      {
        subject_name: updateData.subject_name,
      },
      {
        where: {
          id: id
        }
      }
    )
  }

  static delete (id) {
    return Model.Subject.destroy({
      where: {
        id: id
      }
    })
  }
}

module.exports = Controller