"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Adopters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      adpotion_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      age: {
        allowNull: false,
        defaultValue: 20,
        type: Sequelize.INTEGER,
      },
      phone: {
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      income_range_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      living_type_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      family_number: {
        defaultValue: 1,
        type: Sequelize.INTEGER,
      },
      family_is_allergic: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      family_agreement: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      pet_number: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      has_experienced: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      accept_guidance: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      alone_hours: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      adpot_reason: {
        type: Sequelize.TEXT,
      },
      adopt_status: {
        defaultValue: false,
        type: Sequelize.STRING,
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
    return queryInterface.dropTable("Adopters");
  },
};
