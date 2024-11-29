"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Adoptions", "status", {
      type: Sequelize.STRING,
      defaultValue: "提交申請",
      // 提交申請 > 審核文件 > 配對毛孩 > 配對成功/失敗
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Adoptions", "status");
  },
};
