"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("FindVolunteers", [
      {
        partner_id: 1,
        per_person: 2,
        weekday: "週一",
        start_time: "09:00",
        end_time: "17:00",
        min_hour: 4,
        introduction:
          "為動物庇護所提供早晨咖啡會議志工服務，協助組織和準備會議。",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partner_id: 2,
        per_person: 4,
        weekday: null,
        start_time: "10:00",
        end_time: "18:00",
        min_hour: 4,
        introduction: "適合團隊工作或休閒聚會，協助照顧動物並提供志工服務。",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partner_id: 1,
        per_person: 1,
        weekday: "週三",
        start_time: "08:30",
        end_time: "16:30",
        min_hour: 4,
        introduction:
          "適合單獨工作或短暫的咖啡休息時間，協助清理動物空間並提供照顧。",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partner_id: 1,
        per_person: 3,
        weekday: "週四",
        start_time: "11:00",
        end_time: "19:00",
        min_hour: 2,
        introduction:
          "適合午餐會議或下午茶，協助動物庇護所的日常運作與動物照顧。",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        partner_id: 3,
        per_person: 5,
        weekday: null,
        start_time: "12:00",
        end_time: "20:00",
        min_hour: 6,
        introduction:
          "為週末聚會提供活躍氛圍，協助動物庇護所的工作與照顧動物。",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("FindVolunteers", {});
  },
};
