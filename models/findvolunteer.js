"use strict";
module.exports = (sequelize, DataTypes) => {
  const FindVolunteer = sequelize.define(
    "FindVolunteer",
    {
      partnerId: DataTypes.INTEGER,
      perPerson: DataTypes.INTEGER,
      weekday: DataTypes.STRING,
      startTime: DataTypes.TIME,
      endTime: DataTypes.TIME,
      minHour: DataTypes.INTEGER,
      introduction: DataTypes.TEXT,
    },
    {
      modelName: "FindVolunteer",
      tableName: "FindVolunteers",
      underscored: true,
    }
  );
  FindVolunteer.associate = function (models) {
    // associations can be defined here
    FindVolunteer.hasMany(models.Volunteer, {
      foreignKey: "findVolunteerId",
    });
    FindVolunteer.belongsTo(models.Partner, {
      foreignKey: "partnerId",
    });
  };
  return FindVolunteer;
};
