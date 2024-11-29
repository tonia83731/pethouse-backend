"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Partners", "city", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Partners", "address", {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Partners", "city");
    await queryInterface.removeColumn("Partners", "address");
  },
};
