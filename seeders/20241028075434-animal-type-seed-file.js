"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("AnimalTypes", [
      {
        type: "Dogs",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: "Cats",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: "Rabbits",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("AnimalTypes", {});
  },
};
