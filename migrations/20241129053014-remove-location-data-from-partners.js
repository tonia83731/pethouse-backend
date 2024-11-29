"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Partners", "location");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Partners", "location", {
      type: Sequelize.STRING,
    });
  },
};
