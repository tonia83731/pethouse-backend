"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("IncomeRanges", [
      {
        range: "0 至 25 萬元",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        range: "25 萬至 50 萬元",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        range: "50 萬至 75 萬元",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        range: "75 萬至 100 萬元",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        range: "100 萬元以上",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("IncomeRanges", {});
  },
};
