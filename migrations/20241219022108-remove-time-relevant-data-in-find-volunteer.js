"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("FindVolunteers", "weekday");
    await queryInterface.removeColumn("FindVolunteers", "start_time");
    await queryInterface.removeColumn("FindVolunteers", "end_time");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("FindVolunteers", "weekday", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("FindVolunteers", "start_time", {
      type: Sequelize.DATE,
    });
    await queryInterface.addColumn("FindVolunteers", "end_time", {
      type: Sequelize.DATE,
    });
  },
};
