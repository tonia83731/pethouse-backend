"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("Furkids", "avatar", {
      type: Sequelize.STRING,
      defaultValue: "https://i.imgur.com/UZ1sYRu.jpeg",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("Furkids", "avatar", {
      type: Sequelize.STRING,
      defaultValue: "https://imgur.com/UZ1sYRu",
    });
  },
};
