"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Partners", {
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
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      week_start: {
        defaultValue: "週日",
        type: Sequelize.STRING,
      },
      week_end: {
        defaultValue: "週六",
        type: Sequelize.STRING,
      },
      opening_time: {
        defaultValue: "09:00",
        type: Sequelize.TIME,
      },
      closing_time: {
        defaultValue: "21:00",
        type: Sequelize.TIME,
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
    return queryInterface.dropTable("Partners");
  },
};
