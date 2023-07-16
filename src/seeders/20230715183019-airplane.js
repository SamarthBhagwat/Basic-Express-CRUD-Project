'use strict';
const {Op} = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [
      {
        'modelNumber': 'AirbusA380',
        'capacity': 800,
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'modelNumber': 'Boeing747',
        'capacity': 605,
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'modelNumber': 'Boeing777',
        'capacity': 550,
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'modelNumber': 'AirbusA340',
        'capacity': 370,
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'modelNumber': 'AirbusA350',
        'capacity': 440,
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airplanes', {
      [Op.or] : [{modelNumber: 'AirbusA350'}, {modelNumber: 'AirbusA340'}]
    })
  }
};
