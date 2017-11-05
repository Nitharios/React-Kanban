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

    return queryInterface.bulkInsert('cards', [
    {
      title : 'Learn React',
      priority_id : 2,
      status_id : 3,
      creator_id : 1,
      assigned_to_id : 2,
      createdAt : 'now()',
      updatedAt : 'now()'
    },
    {
      title : 'Learn Angular',
      priority_id : 2,
      status_id : 3,
      creator_id : 1,
      assigned_to_id : 2,
      createdAt : 'now()',
      updatedAt : 'now()'
    },
    {
      title : 'Learn Redux',
      priority_id : 1,
      status_id : 2,
      creator_id : 1,
      assigned_to_id : 2,
      createdAt : 'now()',
      updatedAt : 'now()'
    },
    {
      title : 'Finish Old Projects',
      priority_id : 1,
      status_id : 1,
      creator_id : 1,
      assigned_to_id : 2,
      createdAt : 'now()',
      updatedAt : 'now()'
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

    return queryInterface.bulkDelete('cards', null, {});
  }
};
