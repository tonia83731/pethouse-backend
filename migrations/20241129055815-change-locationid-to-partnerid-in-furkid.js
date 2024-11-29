"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn("Furkids", "location_id", "partner_id");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn("Furkids", "partner_id", "location_id");
  },
};
