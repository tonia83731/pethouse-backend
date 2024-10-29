"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("SupplyCategories", [
      {
        name: "accessories",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "foods & treats",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("SupplyCategories", {});
  },
};
