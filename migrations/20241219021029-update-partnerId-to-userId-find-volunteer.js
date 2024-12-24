"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn(
      "FindVolunteers",
      "partner_id",
      "user_id"
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn(
      "FindVolunteers",
      "user_id",
      "partner_id"
    );
  },
};
