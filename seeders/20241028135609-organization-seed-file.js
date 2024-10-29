"use strict";
const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Organizations", [
      {
        name: "愛心動物之家",
        city: "台北市",
        district: "中山區",
        address: "和平東路123號",
        email: "contact@lovepaws.tw",
        password: await bcrypt.hash("paws1234", 10),
        phone: "02-1234-5678",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "毛孩之家",
        city: "台中市",
        district: "西屯區",
        address: "福康路456號",
        email: "info@furfriends.tw",
        password: await bcrypt.hash("furry9876", 10),
        phone: "04-2345-6789",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "幸福尾巴動物收容所",
        city: "高雄市",
        district: "左營區",
        address: "愛心路789號",
        email: "hello@happytails.tw",
        password: await bcrypt.hash("tails4321", 10),
        phone: "07-3456-7890",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Organizations", {});
  },
};
