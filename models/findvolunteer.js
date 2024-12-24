"use strict";
module.exports = (sequelize, DataTypes) => {
  const FindVolunteer = sequelize.define(
    "FindVolunteer",
    {
      userId: DataTypes.INTEGER,
      perPerson: DataTypes.INTEGER,
      weekday: DataTypes.INTEGER,
      startTime: DataTypes.INTEGER,
      endTime: DataTypes.INTEGER,
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
    FindVolunteer.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };
  return FindVolunteer;
};
