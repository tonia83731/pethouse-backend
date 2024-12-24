"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("FindVolunteers", "weekday");
    await queryInterface.addColumn("FindVolunteers", "date", {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("FindVolunteers", "weekday", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn("FindVolunteers", "date");
  },
};
