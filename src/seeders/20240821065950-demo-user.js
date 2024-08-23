'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Check if any data is already present in the Users table
    const usersCount = await queryInterface.sequelize.query(
      `SELECT COUNT(*) as count FROM Users where email='johndoe@yopmail.com';`
    );

    const count = usersCount[0][0].count;

    if (count == 0) {
      // If no users are present, insert the new user
      await queryInterface.bulkInsert('Users', [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@yopmail.com',
        password: '$2b$10$gQG3g4uxjSkP5O0O.wAYfeZeJKAtrjplQpw.4R/N8wU3ILeYQRehO',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    } else {
      console.log('Users table already has data, skipping seeding.');
    }
  },

  async down(queryInterface, Sequelize) {
    // Remove the inserted data (if needed)
    await queryInterface.bulkDelete('Users', null, {});
  }
};
