"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Furkids", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      gender: {
        defaultValue: "M",
        type: Sequelize.STRING,
      },
      animal: {
        allowNull: false,
        defaultValue: "Dog",
        type: Sequelize.STRING,
      },
      size: {
        allowNull: false,
        defaultValue: "S",
        type: Sequelize.STRING,
      },
      age: {
        allowNull: false,
        defaultValue: "Child",
        type: Sequelize.STRING,
      },
      partner_id: {
        type: Sequelize.INTEGER,
      },
      is_neutured: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      is_vaccinated: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Furkids");
  },
};
