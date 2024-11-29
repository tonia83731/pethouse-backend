"use strict";
const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Fluffy McSnuggles",
        account: "paw-some2024",
        email: "fluffy@purrfectmail.com",
        password: await bcrypt.hash("Meow1234", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Barky McBarkface",
        account: "woof-woof007",
        email: "barky@doggydomain.com",
        password: await bcrypt.hash("WoofWoof5678", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", {});
  },
};
