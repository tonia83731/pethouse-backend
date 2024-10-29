"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("AnimalSizes", [
      {
        size: "S",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        size: "M",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        size: "L",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("AnimalSizes", {});
  },
};
