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
    return queryInterface.bulkInsert('teachers', [
      {first_name:'Bambang', last_name:'Supaptro', email:'bambangsuprapto@sekolah.id', createdAt: new Date(), updatedAt: new Date(),},
      {first_name:'Rukmana', last_name:'Fatmawati', email:'rukmanafatmawati@sekolah.id', createdAt: new Date(), updatedAt: new Date(),},
      {first_name:'Butet', last_name:'Naborhu', email:'butetnaborhu@sekolah.id', createdAt: new Date(), updatedAt: new Date(),},
      {first_name:'Yulius', last_name:'Prawiranegara', email:'yuliusprawinegara@sekolah.id', createdAt: new Date(), updatedAt: new Date(),}
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('teachers', null, {});
  }
};
