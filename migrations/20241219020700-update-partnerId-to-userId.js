"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn("Furkids", "partner_id", "user_id");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn("Furkids", "user_id", "partner_id");
  },
};
