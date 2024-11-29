"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Fluffy McSnuggles",
        account: "paw-some2024",
        email: "fluffy@purrfectmail.com",
        password: "Meow1234",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Barky McBarkface",
        account: "woof-woof007",
        email: "barky@doggydomain.com",
        password: "WoofWoof5678",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", {});
  },
};
