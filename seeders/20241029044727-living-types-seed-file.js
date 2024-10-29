"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("LivingTypes", [
      {
        type: "電梯大樓(6層以上)",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: "公寓(5層以上, 無電梯)",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: "透天厝",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: "平房(含三合院及四合院)",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: "一般搭建屋(例如：鐵皮屋、貨櫃屋)",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("LivingTypes", {});
  },
};
