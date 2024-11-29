"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Adoptions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      furkid_id: {
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
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      occupation: {
        type: Sequelize.STRING,
      },
      income: {
        type: Sequelize.STRING,
      },
      house_type: {
        type: Sequelize.STRING,
      },
      living_area: {
        type: Sequelize.STRING,
      },
      family_number: {
        defaultValue: 1,
        type: Sequelize.INTEGER,
      },
      is_agree: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      is_allergic: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      has_pet: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      has_experienced: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      has_skills: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      accept_training: {
        defaultValue: true,
        type: Sequelize.BOOLEAN,
      },
      alone_hour: {
        defaultValue: 4,
        type: Sequelize.INTEGER,
      },
      reason: {
        type: Sequelize.TEXT,
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
    return queryInterface.dropTable("Adoptions");
  },
};
