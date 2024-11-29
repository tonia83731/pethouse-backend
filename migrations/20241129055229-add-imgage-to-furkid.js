"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Furkids", "avatar", {
      type: Sequelize.STRING,
      defaultValue: "https://imgur.com/UZ1sYRu",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Furkids", "avatar");
  },
};
