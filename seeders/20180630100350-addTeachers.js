'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Teachers', [{
        first_name: "Bambang",
        last_name : "Supratpto",
        email : "bambangsuprapto@sekolah.id",
        createdAt : new Date(),
        updatedAt : new Date(),
      },{
        first_name: "Rukamana",
        last_name : "Fatmawati",
        email : "RukamanaFatmawati@sekolah.id",
        createdAt : new Date(),
        updatedAt : new Date(),
      },{
        first_name: "Butet",
        last_name : "Nairbohu",
        email : "ButetNairbohu@sekolah.id",
        createdAt : new Date(),
        updatedAt : new Date(),
      },{
        first_name: "Yulius",
        last_name : "Prawiranegara",
        email : "yuliusprawiranegara@sekolah.id",
        createdAt : new Date(),
        updatedAt : new Date(),
      },])
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Teacher', null, {})
  }
};
