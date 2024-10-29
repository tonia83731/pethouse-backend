"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("ActivityAreas", [
      {
        area: "院子或後院",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        area: "家附近公園",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        area: "家有游泳池",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        area: "陽台",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        area: "屋頂",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        area: "其他",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ActivityAreas", {});
  },
};
