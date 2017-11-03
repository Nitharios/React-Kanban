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

    return queryInterface.bulkInsert('priorities', [
      {
        name : 'high',
        createdAt : 'now()',
        updatedAt : 'now()'
      },
      {
        name : 'medium',
        createdAt : 'now()',
        updatedAt : 'now()'
      },
      {
        name : 'low',
        createdAt : 'now()',
        updatedAt : 'now()'
      },
      {
        name : 'blocker',
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
    return queryInterface.bulkDelete('priorities', null, {});
  }
};
