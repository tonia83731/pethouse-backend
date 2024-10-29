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
      image: {
        defaultValue: "https://imgur.com/UZ1sYRu",
        type: Sequelize.STRING,
      },
      amimal_type_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      aminal_breed_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      aminal_gender_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      aminal_size_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      aminal_age_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      is_vaccinated: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      is_neutered: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      organization_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      is_adopting: {
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
    return queryInterface.dropTable("Adoptions");
  },
};
