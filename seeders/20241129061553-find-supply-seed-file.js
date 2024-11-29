"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("FindSupplies", [
      {
        partner_id: 1,
        supply_name: "狗糧(過期可)",
        number: 50,
        introduction:
          "提供給動物庇護所的狗狗食物，確保無家可歸的狗狗能夠得到充足的營養。",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partner_id: 1,
        supply_name: "貓砂",
        number: 100,
        introduction: "用於清潔貓咪的排泄物，保持動物庇護所內部的清潔與衛生。",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partner_id: 2,
        supply_name: "毛毯",
        number: 30,
        introduction: "為庇護所的動物提供溫暖的毛毯，特別是冬天保暖非常重要。",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partner_id: 4,
        supply_name: "消毒水",
        number: 20,
        introduction: "用於清潔和消毒動物庇護所，防止疾病傳播，保持環境安全。",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partner_id: 1,
        supply_name: "寵物玩具",
        number: 60,
        introduction:
          "提供給動物們娛樂和鍛煉的玩具，幫助它們保持活力和心理健康。",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("FindSupplies", {});
  },
};
