"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Partners", [
      {
        name: "毛孩不哭 台北美麗華店",
        email: "taipei.mira@maohai.com",
        phone: "0912345678",
        week_start: "週一",
        week_end: "週日",
        opening_time: "10:00",
        closing_time: "22:00",
        city: "台北市",
        address: "台北市信義區美麗華路2段",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "毛孩不哭 高雄夢時代店",
        email: "kaohsiung.dream@maohai.com",
        phone: "0923456789",
        week_start: "週二",
        week_end: "週日",
        opening_time: "11:00",
        closing_time: "23:00",
        city: "高雄市",
        address: "高雄市前鎮區中華五路2段夢時代購物中心",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "毛孩不哭 台中大遠百店",
        email: "taichung.forever21@maohai.com",
        phone: "0934567890",
        week_start: "週一",
        week_end: "週六",
        opening_time: "09:00",
        closing_time: "21:00",
        city: "台中市",
        address: "台中市西區建國北路二段大遠百購物中心",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "毛孩不哭 台南遠東店",
        email: "tainan.far.east@maohai.com",
        phone: "0967890123",
        week_start: "週一",
        week_end: "週日",
        opening_time: "10:00",
        closing_time: "21:00",
        city: "台南市",
        address: "台南市中西區府前路1段遠東百貨",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Partners", {});
  },
};
