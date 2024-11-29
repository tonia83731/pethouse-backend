"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("FindVolunteers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      partner_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      per_person: {
        defaultValue: 1,
        type: Sequelize.INTEGER,
      },
      weekday: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      start_time: {
        defaultValue: "09:00",
        type: Sequelize.TIME,
      },
      end_time: {
        defaultValue: "18:00",
        type: Sequelize.TIME,
      },
      min_hour: {
        defaultValue: 4,
        type: Sequelize.INTEGER,
      },
      introduction: {
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
    return queryInterface.dropTable("FindVolunteers");
  },
};
