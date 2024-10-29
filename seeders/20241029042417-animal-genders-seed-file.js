"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("AnimalGenders", [
      {
        gender: "male",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        gender: "female",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        gender: "unknown",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("AnimalGenders", {});
  },
};
