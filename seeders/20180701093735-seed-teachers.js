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
    return queryInterface.bulkInsert('Teachers',[{
      first_name:'Bambang',
      last_name:'suparto',
      email:'bambangsuparto@sekolah.id',
      createdAt: new Date,
      updatedAt: new Date
    },{
        first_name:'Rukmana',
        last_name:'fatmawati',
        email:'rukmanafatmawati@sekolah.id',
        createdAt: new Date,
        updatedAt: new Date
      },{
        first_name:'Butet',
        last_name:'nairborhu',
        email:'butetnairbohu@sekolah.id',
        createdAt: new Date,
        updatedAt: new Date
      },{
        first_name:'Yulius',
        last_name:'prawiranegare',
        email:'yuliusprawiranegra@sekolah.id',
        createdAt: new Date,
        updatedAt: new Date
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Teachers',null,{})
  }
};
