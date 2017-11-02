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

    return queryInterface.bulkInsert('statuses', [
      {
        name : 'In Queue',
        createdAt : 'now()',
        updatedAt : 'now()'
      },
      {
        name : 'In Progress',
        createdAt : 'now()',
        updatedAt : 'now()'      
      },
      {
        name : 'Done',
        createdAt : 'now()',
        updatedAt : 'now()'            
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete('statuses', null, {});
  }
};
