"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Volunteers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      organization_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      volunteer_number: {
        allowNull: false,
        defaultValue: 1,
        type: Sequelize.INTEGER,
      },
      start_date: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
      end_date: {
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
      introduction: {
        type: Sequelize.TEXT,
      },
      min_work_hrs: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable("Volunteers");
  },
};
