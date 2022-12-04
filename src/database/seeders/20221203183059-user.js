'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Users', [
      {
        name: "irvan",
        pin: 1234,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "taufik",
        pin: 1111,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Users', null, {});
     
  }
};