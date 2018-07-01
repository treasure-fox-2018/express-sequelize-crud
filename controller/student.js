const Model = require("../models");

class Controller {
  static findAll() {
    return Model.Student.findAll({
      order: [["id", "ASC"]]
    })
  }

  static add (newData) {
    return Model.Student.create({
      first_name: newData.first_name,
      last_name: newData.last_name,
      email: newData.email
    })
  }

  static findById(id) {
    return Model.Student.findById(id);
  }

  static update(id,updateData) {
    return Model.Student.update(
      {
        first_name: updateData.first_name,
        last_name: updateData.last_name,
        email: updateData.email
      },
      {
        where: {
          id: id
        }
      }
    )
  }

  static delete(id) {
    return Model.Student.destroy({
      where: {
        id: id
      }
    })
  }
}

module.exports = Controller