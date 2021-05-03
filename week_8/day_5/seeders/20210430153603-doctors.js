'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('patients', [{
        name: 'bob',
        email: 'bob@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
        
    }], {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('patients', null, {});
  }
};

