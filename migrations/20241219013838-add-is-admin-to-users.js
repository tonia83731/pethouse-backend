"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Users", "phone", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Users", "address", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Users", "is_admin", {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
    await queryInterface.addColumn("Users", "week_start", {
      type: Sequelize.INTEGER,
      defaultValue: 0, // 星期日
    });
    await queryInterface.addColumn("Users", "week_end", {
      type: Sequelize.INTEGER,
      defaultValue: 6, // 星期六
    });
    await queryInterface.addColumn("Users", "opening_time", {
      type: Sequelize.INTEGER,
      defaultValue: 0, // 0:00
    });
    await queryInterface.addColumn("Users", "closing_time", {
      type: Sequelize.INTEGER,
      defaultValue: 1439, // 23:59
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users", "phone");
    await queryInterface.removeColumn("Users", "address");
    await queryInterface.removeColumn("Users", "is_admin");
    await queryInterface.removeColumn("Users", "week_start");
    await queryInterface.removeColumn("Users", "week_end");
    await queryInterface.removeColumn("Users", "opening_time");
    await queryInterface.removeColumn("Users", "closing_time");
  },
};
