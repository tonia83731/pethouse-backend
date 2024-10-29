"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("AnimalBreeds", [
      {
        animal_type_id: 1,
        breeds: "未知",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        animal_type_id: 1,
        breeds: "米克斯",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        animal_type_id: 2,
        breeds: "未知",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        animal_type_id: 2,
        breeds: "米克斯",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        animal_type_id: 3,
        breeds: "未知",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        animal_type_id: 3,
        breeds: "米克斯",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("AnimalBreeds", {});
  },
};
