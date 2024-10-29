"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Supplies", {
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
      send_address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      category_id: {
        allowNull: false,
        defaultValue: 1,
        type: Sequelize.INTEGER,
      },
      supply_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      supply_number: {
        allowNull: false,
        defaultValue: 1,
        type: Sequelize.INTEGER,
      },
      note: {
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
    return queryInterface.dropTable("Supplies");
  },
};
