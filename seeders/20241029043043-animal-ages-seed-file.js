"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("AnimalAges", [
      {
        age: "adult",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        age: "child",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("AnimalAges", {});
  },
};
