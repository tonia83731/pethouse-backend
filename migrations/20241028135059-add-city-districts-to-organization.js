"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Organizations", "city", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Organizations", "district", {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Organizations", "city");
    await queryInterface.removeColumn("Organizations", "district");
  },
};
